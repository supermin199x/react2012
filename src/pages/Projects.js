import React, {useState} from 'react';
import '../pages/Projects.css';
import StateXObject from "../exam/StateXObject";
import Gallery from "../exam/gallery/Gallery";
import {Link} from 'react-router-dom';

const Projects = () => {
    const [dataState, setDataState] = useState({
        home: "/",
		todolist: "/todolist",
		gallery: "/gallery",
    });

	function changePageFirst() {
		let c1 = document.querySelector('.content-01');
		let c2 = document.querySelector('.content-02');
		c1.style.display = "block";
		c2.style.display = "none";
	}

	function changePageSecond() {
		let c1 = document.querySelector('.content-01');
		let c2 = document.querySelector('.content-02');
		c2.style.display = "block";
		c1.style.display = "none";
	}

    return (
		<div className="box">
			<aside className="aside">
				<ul className="aside-links">
					<li>
						<Link to={dataState.home} className="aside-item">
							 Min199x
						</Link>
					</li>
				</ul>
				<ul className="exam-links">
					<li>
						<Link onClick={changePageFirst} className="exam-item">
							Project 01 <a>React State & Object</a>
						</Link>
					</li>
					<li>
						<Link onClick={changePageSecond}  className="exam-item">
							Project 02 <a>Gallery Cats</a>
						</Link>
					</li>
				</ul>
			</aside>
			<content className="content-01">
				<StateXObject />
			</content>
			<content className="content-02">
				<Gallery />		
			</content>
		</div>
    );
}

export default Projects;