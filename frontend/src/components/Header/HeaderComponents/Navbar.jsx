import React from "react";
import "../../../assets/styles/header/navbar.css";

import { navElementsArray } from "../../../utils/navElementClass";
import NavElement from "./NavElement";

function Navbar() {
	return (
		<nav className="header__navbar">
			<ul className="navbar__navContainer">
				{navElementsArray.map((el, i) => {
					return <NavElement key={i} link={el.link} name={el.name} />;
				})}
			</ul>
		</nav>
	);
}

export default Navbar;
