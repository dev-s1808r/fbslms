const Router = require("express").Router();

// const multer = require("multer");
// const multerS3 = require("multer-s3");
const aws = require("aws-sdk");

const User = require("../models/user");

const {
	getAllUsers,
	getUserById,
	deleteUserById,
	toggleContentAccess,
	countUsersByAccess,
	createNewPlaylist,
	getAllPlaylists,
	getAllMedia,
	uploadMedia,
	addPlaylist,
} = require("../controllers/adminController");

const multer = require("multer");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		return cb(null, "./upload/media");
	},
	filename: function (req, file, cb) {
		return cb(null, `${Date.now()}_${file.originalname}`);
	},
});

const upload = multer({ storage: storage });

async function isLoggedInAsAdmin(req, res, next) {
	console.log("req user ---", req.user);
	if (req.user) {
		let user = await User.find({ email: req.user.emails[0].value }).exec();
		const u = user[0];
		if (u.role === "admin") {
			console.log("admin logged in");
			next();
		} else {
			res.status(401).send({ error: "unauthorized" });
		}
	} else {
		res.sendStatus(401);
	}
	// req.user ? next() : res.sendStatus(401);
}

const spacesEndpoint = new aws.Endpoint("blr1.digitaloceanspaces.com");
const s3 = new aws.S3({
	endpoint: spacesEndpoint,
	accessKeyId: "DO00A9JCUVVL89MNRBYV",
	secretAccessKey: "2svXrYhbiDbFl09Lyqw9IpKOB8/Aydn0tPIpFnkO6ps",
});

// const upload = multer({
// 	storage: multerS3({
// 		s3: s3,
// 		bucket: "fbslmscn",
// 		acl: "public-read",
// 		key: function (request, file, cb) {
// 			console.log(file);
// 			cb(null, file.originalname);
// 		},
// 	}),
// }).array("upload", 1);

Router.get("/get-all-users", isLoggedInAsAdmin, getAllUsers);
Router.get("/get-user-by-id", getUserById);
Router.get("/delete-user-by-id", deleteUserById);
Router.patch("/toggle-content-access", toggleContentAccess);
Router.get("/get-active-inactive-user-number", countUsersByAccess);
Router.patch("/add-new-playlist-on-user", addPlaylist);
Router.post("/add-new-playlist", createNewPlaylist);
Router.get("/get-all-playlists", getAllPlaylists);
// route to upload media locally
Router.post(
	"/upload-media",
	upload.fields([{ name: "thumbnail" }, { name: "mediaFile" }]),
	uploadMedia
);

Router.get("/get-all-media", isLoggedInAsAdmin, getAllMedia);

module.exports = Router;

// Router.post("/upload-media", function (request, response, next) {
// 	upload(request, response, function (error) {
// 		if (error) {
// 			console.log(error);
// 			return response.send("error");
// 		}
// 		console.log("File uploaded successfully");
// 		response.json("okay");
// 	});
// });
