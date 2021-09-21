import React, { useRef } from "react";
import { ItemTypes } from "../Utils/itemTypes";
import { useDrag, useDrop } from "react-dnd";
import CrossIcon from "../svgs/CrossIcon";
import { BiCheck } from "react-icons/bi";

const Task = ({
	doneHandler,
	deleteHandler,
	isFinished,
	name,
	index,
	moveTask,
	id,
}) => {
	const ref = useRef(null);

	const [{ handlerId }, drop] = useDrop({
		accept: ItemTypes.CARD,
		collect(monitor) {
			return {
				handlerId: monitor.getHandlerId(),
			};
		},
		hover(item, monitor) {
			if (!ref.current) {
				return;
			}

			const dragIndex = item.index;
			const hoverIndex = index;

			if (dragIndex === hoverIndex) {
				return;
			}
			// Determine rectangle on screen
			const hoverBoundingRect = ref.current?.getBoundingClientRect();
			// Get vertical middle
			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			// Determine mouse position
			const clientOffset = monitor.getClientOffset();
			// Get pixels to the top
			const hoverClientY = clientOffset.y - hoverBoundingRect.top;
			console.log(hoverClientY);
			// Only perform the move when the mouse has crossed half of the items height
			// When dragging downwards, only move when the cursor is below 50%
			// When dragging upwards, only move when the cursor is above 50%
			// Dragging downwards

			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}
			// Dragging upwards
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}
			moveTask(dragIndex, hoverIndex);

			item.index = hoverIndex;
		},
	});

	const [{ isDragging }, drag] = useDrag({
		type: ItemTypes.CARD,
		item: () => {
			return { id, index };
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});
	drag(drop(ref));

	return (
		<li className="taskList__item" ref={ref} data-handler-id={handlerId}>
			<button
				className={`done__button ${isFinished ? "done" : ""}`}
				onClick={doneHandler}
			>
				{isFinished ? <BiCheck /> : null}
			</button>
			{isFinished ? (
				<strike className="done__task">{name}</strike>
			) : (
				<span>{name}</span>
			)}

			<button className="delete__button" onClick={deleteHandler}>
				<CrossIcon />
			</button>
		</li>
	);
};

export default Task;
