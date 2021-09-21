import React from "react";
import Tasklist from "./Tasklist";

const Active = ({ list }) => {
	let activeTasks = list.filter((task) => task.isFinished === false);

	return (
		<div>
			<Tasklist list={activeTasks} />
		</div>
	);
};

export default Active;
