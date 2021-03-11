import React from "react";
import "./App.css";
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterMember from './pages/RegisterMember';
import RegisterOrg from './pages/RegisterOrg';
import Member from './pages/Member';
import Error404 from './pages/Error404';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
;	return (
		<div className="app">
			<Router>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/react2012" component={Home}/>
					<Route path="/login" component={Login}/>
					<Route path="/registermember" component={RegisterMember}/>
					<Route path="/registerOrg" component={RegisterOrg}/>
					<Route path="/member" component={Member}/>
					<Route component={Error404}></Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;