import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/styles/header/navElement.css";

function NavElement({ link, name }) {
	return (
		<li className="navbar__li">
			<Link to={link} className="navlink__nav">
				{name}
			</Link>
		</li>
	);
}

export default NavElement;
