import React from "react";
import "../pages/RegisterMember.css";
import Navbar from "../components/Navbar";

const RegisterMember = () => {
	return (
		<div className="registermember">
			<div className="container">
				<h2>ลงทะเบียนสมาชิก</h2>
				<form>
					<label for="username">ชื่อผู้ใช้งาน</label>
					<input id="username" type="text" />
					<label for="password">รหัสผ่าน</label>
					<input id="password" type="password"/>
					<button>ลงทะเบียน</button>
				</form>
			</div>
		</div>
	);
};

export default RegisterMember;
