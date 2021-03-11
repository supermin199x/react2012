import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "../pages/Login.css";

class Login extends Component {
	state = {
		username: '',
		password: ''
	}

	onInputChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
		console.log(this.state);
	}

	onSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
	}

	render() {
		return (
			<div className="login">
				<Navbar />
				<div className="login-form">
					<h2>เข้าสู่ระบบ</h2>
					<form onSubmit={this.onSubmit}>
						<label for="username">ชื่อผู้ใช้งาน</label>
						<input id="username" name="username" type="text" autoComplete="off" onChange={this.onInputChange}/>
						<label for="password">รหัสผ่าน</label>
						<input id="password" name="password" type="password" autoComplete="off" onChange={this.onInputChange}/>
						<button type="submit">เข้าสู่ระบบ</button>
					</form>
				</div>
			</div>
		)
	}
}

export default Login;
