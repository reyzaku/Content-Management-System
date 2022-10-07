import React from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
	return (
		<div className="flex flex-col mb-8">
			<h3 className="text-2xl mb-8">Explore &#9889;</h3>
			<div className="flex-col flex gap-4">
				<li className="list-none text-lg">
					<Link>&#128150; Popular Post</Link>
				</li>
				<li className="list-none text-lg">
					<Link>&#128226; Newest Post</Link>
				</li>
				<li className="list-none text-lg">
					<Link>&#128185; Popular Tag</Link>
				</li>
			</div>
		</div>
	);
};

export default Explore;
