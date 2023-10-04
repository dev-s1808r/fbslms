import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import MediaModule from "../components/module/media/MediaModule";
import ManageMedia from "../components/module/admin/mediaManagement/ManageMedia";
import ManageUsers from "../components/module/admin/userManagement/ManageUsers";
import Login from "../pages/Login";

export const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Dashboard />,
		children: [
			{
				path: "",
				element: <MediaModule />,
			},
			{
				path: "user",
				element: <>h1</>,
			},
			{
				path: "manage-media",
				element: <ManageMedia />,
			},
			{
				path: "manage-users",
				element: <ManageUsers />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
]);
