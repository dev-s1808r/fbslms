import React, { useEffect } from "react";
import { getMediaByPlaylist } from "../../../api/media/mediaApi";

function ShowMediaListCards({ currentPlaylist }) {
	useEffect(() => {
		getMediaByPlaylist("java");
	}, []);

	return <div>{currentPlaylist}</div>;
}

export default ShowMediaListCards;
