import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../instance";

const base = "api/v1/auth";

export const fetchUserByEmail = createAsyncThunk(
	"users/fetchUserByEmail",
	async () => {
		try {
			const response = await api.get(`${base}/user-info`, {
				withCredentials: true,
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			});
			const data = response.data;
			// console.log("from fetchUser auth api", data);
			return data;
		} catch (error) {
			console.log(error.message);
		}
	}
);
