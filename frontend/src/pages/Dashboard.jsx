import React, { useEffect, useState } from "react";

import PageWithSideBar from "../layout/PageWithSideBar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserByEmail } from "../api/auth/authApi";

function Dashboard() {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		setLoading(true);
		dispatch(fetchUserByEmail())
			.then((user) => {
				if (user) {
					// console.log(
					// 	"dispatching async thunk user details from dashboard ",
					// 	user
					// );
					setLoading(false);
				} else {
					navigate("/login");
				}
			})
			.catch((error) => {
				console.log("error", error.message);
				navigate("/login");
			});
	}, []);

	const u = useSelector((state) => state.userState.user);

	if (loading) {
		return <>Wait!</>;
	}

	if (!u) {
		return navigate("/login", { replace: true });
	}

	return <PageWithSideBar></PageWithSideBar>;
}

export default Dashboard;
