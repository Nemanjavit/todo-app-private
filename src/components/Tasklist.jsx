import React, { useContext } from "react";
import { TaskContext } from "../App";
import Task from "./Task";

const Tasklist = ({ list }) => {
	const { settasklist, tasklist } = useContext(TaskContext);

	const onDelete = (id) => {
		let newlist = tasklist;
		let updatedlist = newlist.filter((task) => task.id !== id);
		settasklist(updatedlist);
	};

	const doneTask = (id) => {
		let newlist = tasklist;
		let finishedTask = newlist.filter((task) => task.id === id);
		finishedTask[0].isFinished = true;
		settasklist(newlist);
	};

	return (
		<ul>
			{list
				? list.map((task) => {
						return (
							<Task
								key={task.id}
								doneHandler={() => doneTask(task.id)}
								deleteHandler={() => onDelete(task.id)}
							/>
						);
				  })
				: null}
		</ul>
	);
};

export default Tasklist;
