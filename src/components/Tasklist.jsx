import React, { useCallback, useContext, useEffect } from "react";
import { TaskContext } from "../App";
import Task from "./Task";
import update from "immutability-helper";
import BottomNav from "./BottomNav";

const Tasklist = ({ list }) => {
	const { settasklist, tasklist } = useContext(TaskContext);
	var debounce = require("lodash.debounce");

	const onDelete = (id) => {
		let newlist = tasklist;
		let updatedlist = newlist.filter((task) => task.id !== id);
		settasklist(updatedlist);
	};

	const doneTask = (id) => {
		let newlist = tasklist;
		let finishedTask = newlist.filter((task) => task.id === id);
		finishedTask[0].isFinished = true;
		settasklist([...newlist]);
		console.log("donetask", id);
	};

	const moveTaskDebounce = (dragIndex, hoverIndex) => {
		const dragTask = tasklist[dragIndex];
		settasklist(
			update(tasklist, {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, dragTask],
				],
			})
		);
	};
	const moveTask = useCallback(debounce(moveTaskDebounce, 100), [tasklist]);

	const deleteCompleted = () => {
		let newlist = tasklist;
		let updatedList = newlist.filter((task) => task.isFinished === false);
		settasklist(updatedList);
	};

	return (
		<div className="taskListwrapper">
			<ul className="taskList">
				{list
					? list.map((task, i) => {
							return (
								<Task
									moveTask={moveTask}
									index={i}
									name={task.name}
									isFinished={task.isFinished}
									key={task.id}
									doneHandler={() => doneTask(task.id)}
									deleteHandler={() => onDelete(task.id)}
									id={task.id}
								/>
							);
					  })
					: null}
			</ul>
			<BottomNav clearCompleted={deleteCompleted} list={list} />
		</div>
	);
};

export default Tasklist;
