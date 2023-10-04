import React from "react";

import PlaylistComponent from "./PlaylistComponent";
import "../../../assets/styles/modules/mediaModule.css";
import { useSelector } from "react-redux";
import ShowMediaList from "./ShowMediaList";
import ShowMediaListCards from "./ShowMediaListCards";

function MediaModule() {
	const currentPlaylist = useSelector(
		(state) => state.mediaState.currentPlaylist
	);

	return (
		<div className="mediaModule">
			{currentPlaylist ? (
				<div>
					<h1>{currentPlaylist}</h1>
					<ShowMediaListCards currentPlaylist={currentPlaylist} />
				</div>
			) : (
				<>
					<PlaylistComponent />
					<PlaylistComponent />
					<PlaylistComponent />
				</>
			)}
		</div>
	);
}

export default MediaModule;
