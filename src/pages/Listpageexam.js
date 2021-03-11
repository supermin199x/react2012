import React, {useState} from 'react';
import '../pages/Listpageexam.css';
import {Link} from 'react-router-dom';

const Listpageexam = () => {
    const [dataState, setDataState] = useState({
        home: "/",
		todolist: "/todolist",
    });

    return (
        <nav>
			<ul className="nav-links">
				<li>
				<Link to={dataState.home} className="nav-item">
					Home
				</Link>
				</li>
			</ul>
			<li>
				<Link to={dataState.todolist} className="nav-item">
					To Do List
				</Link>
			</li>
    	</nav>
    );
}

export default Listpageexam;