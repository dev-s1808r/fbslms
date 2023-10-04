const Media = require("../models/media");

const getMediaByPlaylist = async (req, res) => {
	const playlist = req.params.playlist;
	console.log(playlist);
	let media = await Media.find().populate("playlist");
	res.json({ media: media });
};

module.exports = { getMediaByPlaylist };
