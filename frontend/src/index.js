import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MediaModule from "./components/module/media/MediaModule";
import ManageUsers from "./components/module/admin/userManagement/ManageUsers";
import MediaUploadForm from "./components/module/admin/mediaManagement/ManageMedia";
import Login from "./pages/Login";
import User from "./components/module/user/User";

import store from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import VideoPlayer from "./components/module/media/VideoPlayer";

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Dashboard />}>
						<Route path="" element={<MediaModule />} />
						<Route path="user" element={<User />} />
						<Route path="manage-media" element={<MediaUploadForm />} />
						<Route path="manage-users" element={<ManageUsers />} />
						<Route path="video" element={<VideoPlayer />} />
					</Route>
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</PersistGate>
	</Provider>
);
