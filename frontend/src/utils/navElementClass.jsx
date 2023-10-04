class NavElement {
	constructor(name, link) {
		this.name = name;
		this.link = link;
	}
}

export const navElementsArray = [
	new NavElement("Home", "/"),
	new NavElement("Profile", "/user"),
];
