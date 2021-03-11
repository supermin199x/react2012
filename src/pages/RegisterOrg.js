import React from "react";
import "../pages/RegisterOrg.css";
import Navbar from "../components/Navbar";

const RegisterOrg = () => {
	return (
		<div className="regisorg">
			<div className="container">
				<h2>ลงทะเบียนองค์กร</h2>
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

export default RegisterOrg;
