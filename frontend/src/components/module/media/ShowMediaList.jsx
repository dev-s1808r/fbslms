import axios from "axios";
import React, { useEffect, useState } from "react";

function ShowMediaList() {
	const [media, setMedia] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/v1/admin/get-all-media", {
				withCredentials: true,
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				const mediaData = response.data;
				// console.log(mediaData);
				setMedia(mediaData.allMedia);
			})
			.catch((error) => {
				console.error("Error fetching playlists:", error);
			});
	}, []);

	return (
		<div className="mediaContainer">
			{media.map((m) => {
				return (
					<div className="mediaCard" key={m._id}>
						<div className="mediaCard__thumbnail">
							<img
								src={m?.links?.thumbnailPath ? m.links.thumbnailPath : ""}
								alt={m.meta.title}
							/>
						</div>
						<div className="mediaCard__meta">
							<div className="mediaCard__title">{m.meta.title}</div>
							<div className="mediaCard__playlist">{m.playlist?.label}</div>
							<div className="mediaCard__desc">{m.meta.description}</div>
						</div>
						<div className="mediaCard__action">
							<div className="mediaCard__button mediaCard__edit">Play</div>
							<div className="mediaCard__button mediaCard__edit">Edit</div>
							<div className="mediaCard__button mediaCard__delete">Delete</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default ShowMediaList;
