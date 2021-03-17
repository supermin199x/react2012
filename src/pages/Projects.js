import React, {useState} from 'react';
import '../pages/Projects.css';
import StateXObject from "../exam/StateXObject"
import {Link} from 'react-router-dom';

const Projects = () => {
    const [dataState, setDataState] = useState({
        home: "/",
		todolist: "/todolist",
    });

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
						<Link to={dataState.todolist} className="exam-item">
							Project 01 <a>React State & Object</a>
						</Link>
					</li>
				</ul>
			</aside>
			<content className="content">
				<StateXObject />
			</content>
		</div>
    );
}

export default Projects;