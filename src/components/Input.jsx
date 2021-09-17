import React from "react";

const Input = ({ changeHandler, value, name, clickHandler }) => {
	return (
		<div className="input__wrapper">
			<button onClick={clickHandler}>Add task</button>
			<input type="text" onChange={changeHandler} value={value} name={name} />
		</div>
	);
};

export default Input;
