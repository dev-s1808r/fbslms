import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { COLUMNS } from "./columns";
import GlobalFileter from "./GlobalFileter";

function BasicTable({ tableData }) {
	const columns = useMemo(() => COLUMNS, []);
	const data = tableData;

	// function and arrays
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		state,
		setGlobalFilter,
	} = useTable(
		{
			columns,
			data,
		},
		useGlobalFilter,
		useSortBy
	);

	const { globalFilter } = state;
	return (
		<>
			<GlobalFileter filter={globalFilter} setFilter={setGlobalFilter} />
			<table {...getTableProps()} className="mainTable">
				<thead className="mainTable__tableHeaderContainer">
					{headerGroups.map((headerGroup) => {
						return (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => {
									return (
										<th
											className="mainTable__tableHeader"
											{...column.getHeaderProps(column.getSortByToggleProps())}
										>
											{column.render("Header")}
											<span>
												{column.IsSorted
													? column.isSortedDesc
														? "😄"
														: "😁"
													: ""}
											</span>
										</th>
									);
								})}
							</tr>
						);
					})}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

export default BasicTable;
