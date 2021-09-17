import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Input from "./components/Input";
import All from "./components/All";
import "./css/main.css";
import Completed from "./components/Completed";
import Active from "./components/Active";

export const TaskContext = createContext();

function App() {
	const [task, settask] = useState({ name: "", id: 0, isFinished: false });
	const [tasklist, settasklist] = useState([]);

	const updateField = (e) => {
		settask({ ...task, name: e.target.value });
	};

	const createTask = () => {
		settask({ ...task, id: (Math.random() * 100).toFixed(0) });
		settasklist([...tasklist, task]);
	};
	console.log(task);
	console.log(tasklist);
	return (
		<TaskContext.Provider value={{ settasklist, tasklist }}>
			<Router>
				<div className="App">
					<Input
						changeHandler={updateField}
						value={task.name}
						name="task.name"
						clickHandler={createTask}
					/>
					<Switch>
						<Route path="/" exact component={() => <All list={tasklist} />} />
						<Route
							path="/completed"
							component={() => <Completed list={tasklist} />}
						/>
						<Route
							path="/active"
							component={() => <Active list={tasklist} />}
						/>
					</Switch>

					<Link to="/completed">completed</Link>
					<Link to="/">All</Link>
					<Link to="/Active">Active</Link>
				</div>
			</Router>
		</TaskContext.Provider>
	);
}

export default App;
