import React from "react";
import Tasklist from "./Tasklist";

const Completed = ({ list }) => {
	let completedTasks = list.filter((task) => task.isFinished === true);
	return (
		<div>
			completed
			<Tasklist list={completedTasks} />
		</div>
	);
};

export default Completed;
