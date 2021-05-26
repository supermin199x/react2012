import React, {useState} from 'react';
import '../pages/Projects.css';
import StateXObject from "../exam/StateXObject";
import Gallery from "../exam/gallery/Gallery";
import HomeJitarsa from "../exam/jitarsa/pages/HomeJitarsa";
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Homepao from '../exam/mhspao/pages/Homepao';


const Projects = () => {
    const [url, setUrl] = useState({
        home: "/",
		HomeJitarsa: "/homejitarsa",
		todolist: "/todolist",
		gallery: "/gallery",
		mhspao: "/mhspao",
		
    });

	const history = useHistory();
	const goPro01 = () =>  history.push('/homejitarsa');
	const goPro02 = () =>  history.push('/gallery');
	const goPro03 = () =>  history.push('/todolist');
	const goPro04 = () =>  history.push('/mhspao');

	function changePage01() {
		let c1 = document.getElementById('content-01');
		let c2 = document.getElementById('content-02');
		let c3 = document.getElementById('content-03');
		let c4 = document.getElementById('content-04');
		c1.style.display = "block";
		c2.style.display = "none";
		c3.style.display = "none";
		c4.style.display = "none";
	}

	function changePage02() {
		let c1 = document.getElementById('content-01');
		let c2 = document.getElementById('content-02');
		let c3 = document.getElementById('content-03');
		let c4 = document.getElementById('content-04');
		c1.style.display = "none";
		c2.style.display = "block";
		c3.style.display = "none";
		c4.style.display = "none";

	}

	function changePage03() {
		let c1 = document.getElementById('content-01');
		let c2 = document.getElementById('content-02');
		let c3 = document.getElementById('content-03');
		let c4 = document.getElementById('content-04');
		c1.style.display = "none";
		c2.style.display = "none";
		c3.style.display = "block";
		c4.style.display = "none";
	}

	function changePage04() {
		let c1 = document.getElementById('content-01');
		let c2 = document.getElementById('content-02');
		let c3 = document.getElementById('content-03');
		let c4 = document.getElementById('content-04');
		c1.style.display = "none";
		c2.style.display = "none";
		c3.style.display = "none";
		c4.style.display = "block";
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
					<li>
						<Link onClick={changePage04} className="exam-item">
							Project 04 <a>Mhs Pao</a>
						</Link>
					</li>
				</ul>
			</aside>
			<content id="content-01" className="content-01">
				<HomeJitarsa />		
			</content>
			<content id="content-02" className="content-02">
				<StateXObject />
			</content>
			<content id="content-03" className="content-03">
				<Gallery />		
			</content>
			<content id="content-04" className="content-04">
				<Homepao />		
			</content>

		</div>
    );
}

export default Projects;