import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	sideBarOpen: true,
	updateMark: 1,
};

export const uiStateSlice = createSlice({
	name: "uiState",
	initialState,
	reducers: {
		handleSideBarToggle: (state) => {
			state.sideBarOpen = !state.sideBarOpen;
		},
		toggleUpdateState: (state) => {
			state.updateMark = state.updateMark * -1;
		},
	},
});

export const { handleSideBarToggle, toggleUpdateState } = uiStateSlice.actions;
export default uiStateSlice.reducer;
