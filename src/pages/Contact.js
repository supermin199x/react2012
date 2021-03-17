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
					<label id="iusername" for="username">My Phone</label>
					<input className="username"  id="username" type="text" autoComplete="off" value="098-873-6962" />
					<label id="iEmail" for="Email">Email</label>
					<input id="Email" name="Email" type="text" autoComplete="off" value="s.statiion@icloud.com"/>
					<label id="iLine" for="Line">Line</label>
					<input id="Line" name="Line" type="text" autoComplete="off" value="Min199x"/>
					<label id="iGithub" for="Github">Github</label>
					<input id="Github" name="Github" type="text" autoComplete="off" value="github.com/supermin199x"/>
				</form>
			</div>
		</div>
	);
}

export default Contact;
