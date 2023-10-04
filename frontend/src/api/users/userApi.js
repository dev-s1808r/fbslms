import { useDispatch } from "react-redux";
import { api } from "../instance";

const base = "api/v1/user";
const adminBase = "api/v1/admin";

export const getAllUsers = async () => {
	try {
		const response = await api.get(`${adminBase}/get-all-users`, {
			withCredentials: true,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});

		const data = response.data;
		// console.log(data);

		return data;
	} catch (error) {
		console.log(error.message);
	}
};

export const handleAccessToggle = async (userToToggle) => {
	try {
		const response = await api.patch(
			`${adminBase}/toggle-content-access`,
			{
				id: userToToggle,
			},
			{
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		);
		const updatedUserDetails = response.data;
		console.log(updatedUserDetails);
		return updatedUserDetails;
	} catch (error) {
		console.log(error.message);
	}
};

export const addPlaylist = async (userId) => {
	try {
		const response = await api.patch(
			`${adminBase}/add-new-playlist-on-user`,
			{
				id: userId,
				playlist: "elixir",
			},
			{
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		);
		const updatedUserDetails = response.data;
		console.log(updatedUserDetails);
		return updatedUserDetails;
	} catch (error) {
		console.log(error.message);
	}
};
