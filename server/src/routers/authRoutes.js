const router = require("express").Router();
const passport = require("passport");

const User = require("../models/user");

function isLoggedIn(req, res, next) {
	req.user ? next() : res.sendStatus(401);
}

function returnUser() {
	User.find({ email: req.user.emails[0].value }).then((user) => {
		if (!user) {
			console.log("no user found");
			res.send("error");
		}
		let u = user[0];
		return { user: u };
	});
}

router.get(
	"/google",
	passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
	"/",
	passport.authenticate("google", {
		successRedirect: "http://localhost:3000",
		failureRedirect: "/api/v1/auth/failure",
	}),
	(req, res) => {
		res.send(returnUser());
	}
);

router.get("/protected", isLoggedIn, (req, res) => {
	User.find({ email: req.user.emails[0].value }).then((user) => {
		if (!user) {
			console.log("no user found");
			res.send("error");
		}
		let u = user[0];
		res.json(u);
	});
});

router.get("/user-info", isLoggedIn, (req, res) => {
	console.log("request received to check logged in user");
	User.find({ email: req.user.emails[0].value }).then((user) => {
		if (!user) {
			console.log("no user found");
			res.send("error");
		}
		let u = user[0];
		console.log("from /user-info ", u);
		res.json({ user: u });
	});
});

router.get("/logout", (req, res) => {
	req.logout(() => {
		req.session.destroy(() => {
			res.send({ status: "loggedOut" });
		});
	});
});

module.exports = router;
