import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "../pages/Login.css";

const Login = (event) => {

	function greet() 
	{
		let username = document.querySelectorAll('#username');
		let less = document.querySelector('#less');
		let big = document.querySelector('#big');
		let number = document.querySelector('#number');
		let tooLong = false;

		username.forEach((user) => {
			if (user.value.length > 8) {
				tooLong = true;
			}
		});
		if (tooLong) {
			less.style.color = 'green';
		} else {
			less.style.display = 'black';
		}

		username.forEach((user) => {
			user.addEventListener('input', greet);
		})
	}

	return (
		<div className="login">
			<Navbar />
			<div className="login-form">
				<h2>เข้าสู่ระบบ</h2>
				<form>
					<label for="username">ชื่อผู้ใช้งาน</label>
					<input id="username" type="text" autoComplete="off" />
					<label for="password">รหัสผ่าน</label>
					<input id="password" type="password" autoComplete="off"/>
					<button type="submit">เข้าสู่ระบบ</button>
				</form>
			</div>
		</div>
	)
}

export default Login;