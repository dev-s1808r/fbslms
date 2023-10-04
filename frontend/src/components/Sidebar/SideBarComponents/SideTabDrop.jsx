import React from "react";
import "../../../assets/styles/sidebar/sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPlaylist } from "../../../features/mediaSlice";
import { useNavigate } from "react-router-dom";

function SideTabDrop({ heading }) {
	const user = useSelector((state) => state.userState.user);
	const playlists = user ? user.user.accessDetails.playlists : null;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// console.log("fom Sidebar.jsx \n", playlists);
	// console.log("heading from sideTabDrop", heading);

	const handlePlayListClick = (c) => {
		// console.log(c);
		dispatch(setCurrentPlaylist(c));
		navigate("/");
	};

	return (
		<div className="sideTabDrop__container">
			{heading === "admin" ? (
				<>
					<h4
						className="sideTabDrop__heading"
						onClick={() => navigate("/manage-media")}
					>
						Manage Media
					</h4>
					<h4
						className="sideTabDrop__heading"
						onClick={() => navigate("/manage-users")}
					>
						Manage Users
					</h4>
				</>
			) : heading === "Courses" ? (
				playlists &&
				playlists.map((course, i) => (
					<h4
						className="sideTabDrop__heading"
						key={i}
						onClick={() => handlePlayListClick(course)}
					>
						{course}
					</h4>
				))
			) : null}
		</div>
	);
}

export default SideTabDrop;
