import React, { Component } from "react";
import "../pages/RegisterMember.css";
import Navbar from "../components/Navbar";

class RegisterMember extends Component {
	state = {
		username: '',
		password: '',
		name: '',
		address: ''
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
			<div className="registerMember">
				<Navbar />
				<div className="registerMember-form">
					<h2>ลงทะเบียน</h2>
					<form onSubmit={this.onSubmit}>
						<label for="username">ชื่อผู้ใช้งาน</label>
						<input id="username" name="username" type="text" onChange={this.onInputChange}/>
						<label for="password">รหัสผ่าน</label>
						<input id="password" name="password" type="password" onChange={this.onInputChange}/>
						<label for="name">ชื่อ</label>
						<input id="name" name="name" type="text" onChange={this.onInputChange}/>
						<label for="lastname">นามสกุล</label>
						<input id="lastname" name="lastname" type="text" onChange={this.onInputChange}/>
						<button type="submit">ลงทะเบียน</button>
					</form>
				</div>
			</div>
		)
	}
}

export default RegisterMember;