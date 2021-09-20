import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Input from "./components/Input";
import All from "./components/All";
import "./css/main.css";
import Completed from "./components/Completed";
import Active from "./components/Active";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Col, Row } from "react-grid-system";
import { FiSun } from "react-icons/fi";
import { RiMoonFill } from "react-icons/ri";
import BottomNav from "./components/BottomNav";

export const TaskContext = createContext();

function App() {
	const [task, settask] = useState({ name: "", id: 0, isFinished: false });
	const [tasklist, settasklist] = useState([]);
	const [isDark, setIsDark] = useState(false);

	const updateField = (e) => {
		settask({ ...task, name: e.target.value });
	};

	const createTask = () => {
		settask({ ...task, id: (Math.random() * 100).toFixed(0) });
		settasklist([...tasklist, task]);
	};

	const backGroundImage = () => {
		const body = document.getElementsByTagName("body");
		let width = window.innerWidth;

		if (isDark === false && width > 768) {
			body[0].style.backgroundImage = 'url("./Images/bg-desktop-light.jpg")';
		} else if (isDark === false && width < 768) {
			body[0].style.backgroundImage = 'url("./Images/bg-mobile-light.jpg")';
		} else if (isDark === true && width > 768) {
			body[0].style.backgroundImage = 'url("./Images/bg-desktop-dark.jpg")';
		} else if (isDark === true && width < 768) {
			body[0].style.backgroundImage = 'url("./Images/bg-mobile-dark.jpg")';
		}
	};

	const themeToggle = () => {
		let body = document.getElementsByTagName("body");
		body[0].classList.toggle("dark");
		setIsDark(!isDark);
	};

	useEffect(() => {
		backGroundImage();
	}, [isDark]);
	window.onload = backGroundImage;
	window.onresize = backGroundImage;

	const keydown = (e) => {
		if (e.keyCode == 13) {
			createTask();
		}
	};
	return (
		<TaskContext.Provider value={{ settasklist, tasklist }}>
			<Router>
				<DndProvider backend={HTML5Backend}>
					<Row justify="center">
						<Col xs={11} md={8} lg={6} xl={6}>
							<div className="App">
								<Row
									nogutter
									className="header"
									align="center"
									justify="between"
								>
									<span>TODO</span>
									<button
										className="theme__toggle__button"
										onClick={() => themeToggle()}
									>
										{isDark ? <FiSun /> : <RiMoonFill />}
									</button>
								</Row>
								<Input
									changeHandler={updateField}
									value={task.name}
									name="task.name"
									clickHandler={createTask}
									keydown={(e) => keydown(e)}
								/>
								<Switch>
									<Route
										path="/"
										exact
										component={() => <All list={tasklist} />}
									/>
									<Route
										path="/completed"
										component={() => <Completed list={tasklist} />}
									/>
									<Route
										path="/active"
										component={() => <Active list={tasklist} />}
									/>
								</Switch>
							</div>
						</Col>
					</Row>
				</DndProvider>
			</Router>
		</TaskContext.Provider>
	);
}

export default App;
