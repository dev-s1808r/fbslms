import React from "react";
import PlaylistComponent from "./PlaylistComponent";

function VideoPlayer() {
	return (
		<div className="videoPlayer__container">
			<video
				src="http://localhost:8000/upload/media/1695888154459_11th java combo batch review reel.mp4"
				controls
			/>
			<PlaylistComponent />
		</div>
	);
}

export default VideoPlayer;
