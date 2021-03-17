import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "../pages/Contact.css";

const Contact = () => {
	return (
		<div className="contact">
			<Navbar />
			<div className="contact-form">
				<h1>Contact Me.</h1>
				<form className="item-form">
					<label for="username">My Phone</label>
					<input className="username"  id="username" name="username" type="text" autoComplete="off" value="098-873-6962" />
					<label for="password">Email</label>
					<input id="password" name="password" type="text" autoComplete="off" value="s.statiion@icloud.com"/>
					<label for="password">Line</label>
					<input id="password" name="password" type="text" autoComplete="off" value="s.statiion@icloud.com"/>
					<label for="password">Github</label>
					<input id="password" name="password" type="text" autoComplete="off" value="github.com/supermin199x"/>
				</form>
			</div>
		</div>
	);
}

export default Contact;
