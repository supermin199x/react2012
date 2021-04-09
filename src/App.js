import React from "react";
import "./App.css";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import StateXObject from './exam/StateXObject';
import Gallery from './exam/gallery/Gallery';
import HomeJitarsa from './exam/jitarsa/pages/HomeJitarsa';
import Error404 from './pages/Error404';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
;	return (
		<div className="app">
			<Router>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/react2012" component={Home}/>
					<Route path="/contact" component={Contact}/>
					<Route path="/projects" component={Projects}/>
					<Route path="/todolist" component={StateXObject}/>
					<Route path="/gallery" component={Gallery}/>
					<Route path="/jitarsa/home" component={HomeJitarsa}/>
					<Route component={Error404}></Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;