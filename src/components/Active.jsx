import React, { useEffect, useState } from "react";
import Tasklist from "./Tasklist";

const Active = ({ list }) => {
	const [newlist, setnewlist] = useState([...list]);

	let activeTasks = newlist.filter((task) => task.isFinished === false);

	return (
		<div>
			<Tasklist list={activeTasks} />
		</div>
	);
};

export default Active;
