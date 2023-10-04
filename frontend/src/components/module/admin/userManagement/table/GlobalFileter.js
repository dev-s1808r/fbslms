import React from "react";

function GlobalFileter({ filter, setFilter }) {
	return (
		<span>
			Search: {""}
			<input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
		</span>
	);
}

export default GlobalFileter;
