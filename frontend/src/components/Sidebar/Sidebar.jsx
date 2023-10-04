import React, { useEffect } from "react";
import "../../assets/styles/sidebar/sidebar.css";
import SideTab from "./SideBarComponents/SideTab";
import { useDispatch, useSelector } from "react-redux";
import { handleSideBarToggle } from "../../features/uiSlice";
import AdminSideTabDrop from "./SideBarComponents/AdminSideTabDrop";

function Sidebar() {
	const dispatch = useDispatch();
	const role = useSelector((state) => state.userState?.user?.user?.role);
	const sideBarOpen = useSelector((state) => state.uiState.sideBarOpen);

	return (
		<div className="sidebar" style={sideBarOpen ? {} : { display: "none" }}>
			<button onClick={() => dispatch(handleSideBarToggle())}>close</button>
			{role === "admin" ? <AdminSideTabDrop /> : null}
			<SideTab heading="Courses" />
		</div>
	);
}

export default Sidebar;
