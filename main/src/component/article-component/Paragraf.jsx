import React from 'react';

const Paragraf = (props) => {
	return (
		<div className="mb-16">
			<div className="px-16">
				<h4 className="mb-8 text-lg">{props.content}</h4>
			</div>
		</div>
	);
};

export default Paragraf;
