import React from "react";
import VideoCard from "./VideoCard";
import "../../../assets/styles/modules/playListComponent.css";

function PlaylistComponent() {
	return (
		<div className="playlistComponent">
			<h3 className="playlistComponent__playlistName">Playlist Component</h3>
			<div className="playlistComponent__cardHolder">
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
			</div>
		</div>
	);
}

export default PlaylistComponent;
