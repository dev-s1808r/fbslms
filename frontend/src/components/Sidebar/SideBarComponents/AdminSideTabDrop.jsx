import React from "react";
import SideTabDrop from "./SideTabDrop";

function AdminSideTabDrop() {
	return (
		<>
			<h3 className="sideTabComponent__heading">Admin Panel</h3>
			<SideTabDrop heading={"admin"} />
		</>
	);
}

export default AdminSideTabDrop;
