import React, {useState} from 'react';
import '../pages/Example.css';
import StateXObject from "../exam/StateXObject"
import {Link} from 'react-router-dom';

const Listpageexam = () => {
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
							Home
						</Link>
					</li>
				</ul>
				<p className="line"></p>
				<ul className="exam-links">
					<li>
						<Link to={dataState.todolist} className="exam-item">
							Project 01 <a>React State & Object</a>
						</Link>
					</li>
					<li>
						<Link to={dataState.todolist} className="exam-item">
							Project 02 <a>React State & Object</a>
						</Link>
					</li>
					<li>
						<Link to={dataState.todolist} className="exam-item">
							Project 03 <a>React State & Object</a>
						</Link>
					</li>
					<li>
						<Link to={dataState.todolist} className="exam-item">
							Project 04 <a>React State & Object</a>
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

export default Listpageexam;