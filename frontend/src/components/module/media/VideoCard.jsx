import React from "react";
import "../../../assets/styles/modules/videoCard.css";

function VideoCard() {
	return (
		<div className="videoCard__container">
			<div className="videoCard__thumbnailContainer">
				<img src="" alt="thumbnuil" className="videoCard__thumbnail" />
			</div>
			<h4 className="videoCard__title">Video Card title goes here</h4>
		</div>
	);
}

export default VideoCard;
