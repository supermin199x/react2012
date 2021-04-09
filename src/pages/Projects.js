import React, {useState} from 'react';
import '../pages/Projects.css';
import StateXObject from "../exam/StateXObject";
import Gallery from "../exam/gallery/Gallery";
import Jitarsa from "../exam/jitarsa/pages/Login";
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";


const Projects = () => {
    const [url, setUrl] = useState({
        home: "/",
		jitarsa: "/jitarsa",
		todolist: "/todolist",
		gallery: "/gallery",
		
    });

	const history = useHistory();
	const goPro01 = () =>  history.push('/jitarsa');
	const goPro02 = () =>  history.push('/gallery');
	const goPro03 = () =>  history.push('/todolist');

	function changePage01() {
		let c1 = document.getElementById('content-01');
		let c2 = document.getElementById('content-02');
		let c3 = document.getElementById('content-03');
		c1.style.display = "block";
		c2.style.display = "none";
		c3.style.display = "none";
	}

	function changePage02() {
		let c1 = document.getElementById('content-01');
		let c2 = document.getElementById('content-02');
		let c3 = document.getElementById('content-03');
		c1.style.display = "none";
		c2.style.display = "block";
		c3.style.display = "none";

	}

	function changePage03() {
		let c1 = document.getElementById('content-01');
		let c2 = document.getElementById('content-02');
		let c3 = document.getElementById('content-03');
		c1.style.display = "none";
		c2.style.display = "none";
		c3.style.display = "block";
	}

    return (
		<div className="box">
			<aside className="aside">
				<ul className="aside-links">
					<li>
						<Link to={url.home} className="aside-item">
							 Min199x
						</Link>
					</li>
				</ul>
				<ul className="exam-links">
					<li>
						<Link onClick={changePage01} className="exam-item">
							Project 01 <a>Web App Jitarsa</a>
						</Link>
					</li>
					<li>
						<Link onClick={changePage02} className="exam-item">
							Project 02 <a>React State & Object</a>
						</Link>
					</li>
					<li>
						<Link onClick={changePage03} className="exam-item">
							Project 03 <a>Gallery Cats</a>
						</Link>
					</li>
				</ul>
			</aside>
			<content id="content-01" className="content-01">
				<Jitarsa />		
			</content>
			<content id="content-02" className="content-02">
				<StateXObject />
			</content>
			<content id="content-03" className="content-03">
				<Gallery />		
			</content>

		</div>
    );
}

export default Projects;