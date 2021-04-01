import React from "react";
import "../components/RandomColor.css";

const RandomColor = () => {

	var colorBg = '#2980b9';

	function changeColor() {
		let bg = document.getElementById('h-box');
		let font = document.getElementById('hello');

		let colorR = ["#282741", "#2980b9", "#ffbe53", "#ff6138"];
		let colorF = ["#ff6138", "#ffbe53", "#2980b9", "#282741"];

		if(colorBg === '#2980b9')
		{
			bg.style.backgroundColor = '#282741';
			font.style.color = '#ff6138';
			colorBg = '#282741';
		} else if(colorBg === '#282741') 
		{
			bg.style.backgroundColor = '#ffbe53';
			font.style.color = '#282741';
			colorBg = '#ffbe53';
		} else if(colorBg === '#ffbe53') 
		{
			bg.style.backgroundColor = '#ff6138';
			font.style.color = '#2980b9';
			colorBg = '#ff6138';
		} else if(colorBg === '#ff6138') 
		{
			bg.style.backgroundColor = '#2980b9';
			font.style.color = '#282741';
			colorBg = '#2980b9';
		} 
	}

	return (
		<div className="landing">
			<form onClick={changeColor} id="h-box" className="h-box">
				<h1 id="hello" className="hello">Hello, Min</h1>
			</form>
		</div>
	);
};

export default RandomColor;