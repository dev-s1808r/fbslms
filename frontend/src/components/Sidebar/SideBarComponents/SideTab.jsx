import React from "react";
import SideTabDrop from "./SideTabDrop";
import "../../../assets/styles/sidebar/sidebar.css";
import { useSelector } from "react-redux";
import AdminSideTabDrop from "./AdminSideTabDrop";

function SideTab({ heading }) {
	return (
		<div className="sideTabComponent">
			<h3 className="sideTabComponent__heading">{heading}</h3>
			<SideTabDrop heading={heading} />
		</div>
	);
}

export default SideTab;
