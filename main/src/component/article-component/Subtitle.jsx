import React from 'react';

const Subtitle = (props) => {
	return (
		<div className="">
			<div className="px-16">
				<h4 className="mb-8 font-semibold text-2xl">{props.content}</h4>
			</div>
		</div>
	);
};

export default Subtitle;
