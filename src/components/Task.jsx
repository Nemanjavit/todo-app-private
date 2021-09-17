import React, { useRef } from "react";
import { ItemTypes } from "../Utils/itemTypes";
import { useDrag, useDrop } from "react-dnd";

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
			// console.log("dragIndex", dragIndex);
			// console.log("hoverindex", hoverIndex);

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
			// Note: we're mutating the monitor item here!
			// Generally it's better to avoid mutations,
			// but it's good here for the sake of performance
			// to avoid expensive index searches.
			item.index = hoverIndex;
		},
	});
	// console.log(handlerId);
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
	// console.log("isdragging", isDragging);
	return (
		<div style={{ height: "50px" }} ref={ref} data-handler-id={handlerId}>
			<button onClick={doneHandler}>done</button>
			{isFinished ? <strike>{name}</strike> : <span>{name}</span>}

			<button onClick={deleteHandler}>X</button>
		</div>
	);
};

export default Task;
