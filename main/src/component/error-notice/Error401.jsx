import React from 'react';
import { useState } from 'react';

const Error401 = () => {
	const [reload, setReload] = useState(false)

	return (
		<div className="mx-auto text-center">
			<h4 className="text-lg text-slate-400 mb-2">
				We are Sorry, something wrong &#128557;
			</h4>
			<h3 className="text-2xl text-slate-400 mb-4">Please reload the page</h3>
			<button className="rounded-full px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition ease-in-out">
				Reload
			</button>
		</div>
	);
};

export default Error401;
