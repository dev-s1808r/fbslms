import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

import uiStateReducer from "../features/uiSlice";
import userStateReducer from "../features/userSlice";
import mediaStateReducer from "../features/mediaSlice";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
};

const reducer = combineReducers({
	uiState: uiStateReducer,
	userState: userStateReducer,
	mediaState: mediaStateReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;
