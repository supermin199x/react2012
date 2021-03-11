import React, { Component } from "react";
import "../pages/RegisterOrg.css";
import Navbar from "../components/Navbar";


class RegisterOrg extends Component {
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
			<div className="registerorg">
				<Navbar />
				<div className="registerorg-form">
					<h2>ลงทะเบียนองค์กร</h2>
					<form onSubmit={this.onSubmit}>
						<label for="username">ชื่อผู้ใช้งาน</label>
						<input id="username" name="username" type="text" autoComplete="off" onChange={this.onInputChange}/>
						<label for="password">รหัสผ่าน</label>
						<input id="password" name="password" type="password" autoComplete="off" onChange={this.onInputChange}/>
						<label for="name">ชื่อองค์กร</label>
						<input id="name" name="name" type="text" autoComplete="off" onChange={this.onInputChange}/>
						<label for="address">ที่อยู่</label>
						<input id="address" name="address" type="text" autoComplete="off" onChange={this.onInputChange}/>
						<button type="submit">ลงทะเบียน</button>
					</form>
				</div>
			</div>
		)
	}
}

export default RegisterOrg;