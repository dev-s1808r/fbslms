import { useDispatch } from "react-redux";
import {
	addPlaylist,
	handleAccessToggle,
} from "../../../../../api/users/userApi";
import { toggleUpdateState } from "../../../../../features/uiSlice";

export const COLUMNS = [
	{
		Header: "Name",
		accessor: "firstName",
		Cell: ({ row }) => {
			return (
				<span
					onClick={() => {
						alert(row.original.firstName);
					}}
				>
					{row.original.firstName + " " + row.original.lastName}
				</span>
			);
		},
	},
	{
		Header: "Email",
		accessor: "email",
	},
	{
		Header: "Access",
		accessor: "accessDetails",
		Cell: ({ row }) => {
			const dispatch = useDispatch();
			return (
				<button
					className="tableButton"
					onClick={() => {
						handleAccessToggle(row.original._id);
						dispatch(toggleUpdateState());
					}}
				>
					{row.original.accessDetails.hasAccess
						? "Revoke Access"
						: "Allow Access"}
				</button>
			);
		},
	},
	{
		Header: "Subscriptions",
		accessor: "hasAccess",
		Cell: ({ row }) => {
			let p = row.original.accessDetails.playlists;
			const dispatch = useDispatch();
			return (
				<span>
					<div className="accessList">
						{p.length > 0 ? p.toString() : "none"}
					</div>
					<button
						onClick={() => {
							addPlaylist(row.original._id);
							dispatch(toggleUpdateState());
						}}
					>
						A
					</button>
				</span>
			);
		},
	},

	{
		Header: "Actions",
		// accessor: "Actions",
		Cell: ({ row }) => {
			return (
				<button
					className="tableButton"
					onClick={() => {
						alert(row.original._id);
					}}
				>
					Visit Profile
				</button>
			);
		},
	},
];
