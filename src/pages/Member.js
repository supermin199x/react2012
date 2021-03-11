import React from 'react';
import Navbar from "../components/Navbar";
import '../pages/Member.css';


const Member = () => {
    return(
        <div className="Member">
				<Navbar />
				<div className="member-container">
					<h2>Member</h2>
				</div>
			</div>
    );
}

export default Member;