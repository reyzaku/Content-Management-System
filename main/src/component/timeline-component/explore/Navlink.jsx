import React from 'react';
import { Link } from 'react-router-dom'

const Navlink = () => {
	return (
		<div className="flex flex-col gap-4 mb-8">
			<li className="list-none"><Link to={`/`}>&#127969; Home</Link></li>
			<li className="list-none"><Link to={`/article`}>&#128240; Article</Link></li>
			<li className="list-none"><Link to={`/editor`}>&#128221; Create Post</Link></li>
		</div>
	);
};

export default Navlink;