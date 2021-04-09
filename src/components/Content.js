import React, { useState } from 'react';
import '../components/Content.css';

const Content = () => {

	const [post, setPost] = useState({
		post: '',
	})

	const [allPost, setAllPost] = useState({
		post: [
			{}
		],
	})

	const onPostchange = (event) => {
		setPost({
			post: event.target.value,
		})
		event.preventDefault();
	}

	const onClick = () => {
		var content = document.getElementById('content');
		console.log(post);
		content.innerHTML = post.post
	}

    return (
		<div className="container-fluid">
			<div className="post">
				<textarea onChange={onPostchange} type="text" rows="4"/>
				<input onClick={onClick} type="button" value="post" />
			</div>
			<div className="showContent">
				<button id="content"></button>
			</div>
		</div>
	);
}

export default Content;