import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	sideBarOpen: true,
	sideBarColor: "purple",
	name: ["this", "sucks"],
};

export const uiStateSlice = createSlice({
	name: "uiState",
	initialState,
	reducers: {
		handleSideBarToggle: (state) => {
			state.sideBarOpen = !state.sideBarOpen;
		},
	},
});

export const { handleSideBarToggle } = uiStateSlice.actions;
export default uiStateSlice.reducer;
