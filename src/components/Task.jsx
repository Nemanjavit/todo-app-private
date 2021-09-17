import React from "react";

const Task = ({ doneHandler, deleteHandler }) => {
	return (
		<div>
			<button onClick={doneHandler}>done</button>
			<span>Task name</span>
			<button onClick={deleteHandler}>X</button>
		</div>
	);
};

export default Task;
