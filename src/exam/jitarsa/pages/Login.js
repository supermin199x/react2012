import React, { useState } from "react";
import "../pages/Login.css";
import { useHistory } from "react-router-dom";

const Login = (event) => {

	const [users, setUsers] = useState({
		username: '',
		password: '',
	})

	const [data, setData] = useState({
		username: 'min',
		password: '1234',
	})

	const history = useHistory();
  	const goPage = () =>  history.push('/jitarsa/home');

	function onSubmit(event){
		if(users.username === data.username && users.password === data.password){
			alert("ยินดีต้อนรับคุณ, " + users.username);
			event.preventDefault();
			goPage();
		} else {
			alert("ไม่พบผู้ใช้งาน, ");
			event.preventDefault();
		}
	
	}
	
	function onChangeUsername(event){
		setUsers({
			username: event.target.value,
			password: users.password,
		})
		
	}

	function onChangePassword(event){
		setUsers({
			username: users.username,
			password: event.target.value,
		})
		event.preventDefault();
	}

	return (
		<div className="login">
			<div className="login-form">
				<h2>เข้าสู่ระบบ</h2>
				<form onSubmit={onSubmit} method="post">
					<p className="user">username = {data.username}</p>
					<p className="user">password = {data.password}</p>
					<label for="username">ชื่อผู้ใช้งาน</label>
					<input onChange={onChangeUsername} id="username" type="text" autoComplete="off" />
					<label for="password">รหัสผ่าน</label>
					<input onChange={onChangePassword} id="password" type="text" autoComplete="off"/>
					<button type="submit">เข้าสู่ระบบ</button>
				</form>
			</div>
		</div>
	)
}

export default Login;