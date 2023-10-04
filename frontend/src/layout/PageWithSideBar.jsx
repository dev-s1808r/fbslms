import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

function PageWithSideBar({ children }) {
	return (
		<div>
			<Header />
			<div className="sidebar__main">
				<Sidebar />
				<div className="sidebar__outlet">
					<Outlet />
					{children}
				</div>
			</div>
		</div>
	);
}

export default PageWithSideBar;
