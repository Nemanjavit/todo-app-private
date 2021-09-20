import React from "react";

const Input = ({ changeHandler, value, name, clickHandler, keydown }) => {
	return (
		<div className="input__wrapper">
			<button className="input__button" onClick={clickHandler}></button>
			<input
				autocomplete="off"
				onKeyDown={keydown}
				className="input"
				type="text"
				onChange={changeHandler}
				value={value}
				name={name}
			/>
		</div>
	);
};

export default Input;
