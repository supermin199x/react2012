import React from "react";
import "../pages/Login.css";
import Navbar from "../components/Navbar";

const Login = () => {
	return (
		<div className="login">
			<div className="container">
				<h2>เข้าสู่ระบบ</h2>
				<form>
					<label for="username">ชื่อผู้ใช้งาน</label>
					<input id="username" type="text" />
					<label for="password">รหัสผ่าน</label>
					<input id="password" type="password"/>
					<button>เข้าสู่ระบบ</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
