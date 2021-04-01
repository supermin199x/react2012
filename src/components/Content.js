import React from 'react';
import '../components/Content.css';

const Content = () => {
    return (
		<div className="container-fluid">
			<div className="nav">
				tset
			</div>
			<section className="leftbar">
				<header className="header-leftbar">
					<p className="logo">CSS Generator</p>
					<p className="sub-logo">by superMin</p>
				</header>
				<hr/>
				<body className="leftbar-body">
					<ul>
						<p className="menu">Layout</p>
						<li>Flexbox Items</li>
						<li>Flexbox Menu Bars</li>
						<li>Flexbox Gallery</li>
						<li>Grid Items</li>
						<li>Grid Pages</li>
						<li>Float</li>
					</ul>
					<ul>
						<p className="menu">Background</p>
						<li>Background Color</li>
						<li>Background Gradient</li>
						<li>Background Image</li>
					</ul>
					<ul>
						<p className="menu">Border</p>
						<li>Border</li>
						<li>Border Radius</li>
						<li>Box Shadow</li>
					</ul>
				</body>
			</section>
			<section className="content">
				<header className="header-content">
					<p className="dashboard">Dashboard</p>
					<p className="choosemenu">Choose menu</p>
				</header>
				<hr/>
			</section>
		</div>
	);
}

export default Content;