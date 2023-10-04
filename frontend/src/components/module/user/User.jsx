import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

function User() {
	const user = useSelector((state) => state.userState.user.user);
	console.log(user);
	return <div>{user.firstName}</div>;
}

export default User;
