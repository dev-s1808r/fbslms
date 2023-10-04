import { createSlice } from "@reduxjs/toolkit";
import { fetchUserByEmail } from "../api/auth/authApi";

const initialState = {
	user: null,
	isLoading: false,
	error: null,
};

export const userStateSlice = createSlice({
	name: "userState",
	initialState,
	reducers: {
		getUser: (state) => {
			console.log(state);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUserByEmail.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchUserByEmail.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isLoading = false;
				state.error = null;
			})
			.addCase(fetchUserByEmail.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message;
			});
	},
});

export const { setUser, clearUser } = userStateSlice.actions;
export default userStateSlice.reducer;
