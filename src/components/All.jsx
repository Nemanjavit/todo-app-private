import React, { useEffect } from "react";
import Task from "./Task";
import Tasklist from "./Tasklist";

const All = ({ list }) => {
	return <Tasklist list={list} />;
};

export default All;
