import React from "react";
import Navbar from "./HeaderComponents/Navbar";
import "../../assets/styles/header/header.css";
import menuIcon from "../../assets/images/identity/icons/menu.png";
import logo from "../../assets/images/identity/logofbs.svg";
import { useDispatch } from "react-redux";
import { handleSideBarToggle } from "../../features/uiSlice";

function Header() {
	const dispatch = useDispatch();
	return (
		<header className="header">
			<div className="header__imageContainer">
				<img
					src={menuIcon}
					alt="toggle menu visibility"
					className="header__menuImage"
					onClick={() => dispatch(handleSideBarToggle())}
				/>
			</div>
			<div className="header__imageContainer">
				<img
					src={menuIcon}
					alt="toggle menu visibility"
					className="header__menuImage"
				/>
			</div>

			<Navbar />

			<div className="header__imageContainer">
				<img
					src={menuIcon}
					alt="toggle menu visibility"
					className="header__profileImage"
				/>
			</div>
		</header>
	);
}

export default Header;
