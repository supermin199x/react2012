import React from "react";
import "../components/Content.css";

const Content = () => {

	function changeColor() {
		let bg = document.getElementById('h-box');
		let font = document.getElementById('hello');

		let colors1 = ["#282741", "#2980b9", "#ffbe53", "#ff6138"];
		let rand1 = Math.random();
		let totalColor1 = colors1.length;
		let ranIndex1 = Math.floor(rand1 * totalColor1);
		let randomColor1 = colors1[ranIndex1];

		let colors2 = ["#ff6138", "#ffbe53", "#2980b9", "#282741"];
		let rand2 = Math.random();
		let totalColor2 = colors2.length + 2;
		let ranIndex2 = Math.floor(rand2 * totalColor2);
		let randomColor2 = colors2[ranIndex2];

		if(randomColor1 === randomColor2 || randomColor2 === null)
		{
			bg.style.backgroundColor = '#ff6138';
			font.style.color = '#ffbe53';
		} else
		{
			bg.style.backgroundColor = randomColor1;
			font.style.color = randomColor2;
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

export default Content;