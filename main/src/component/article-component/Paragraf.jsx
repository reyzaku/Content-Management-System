import React from 'react';

const Paragraf = (props) => {
	return (
		<div className="mb-16">
			<div className="desktop:mx-40 laptop:mx-40 tablet:mx-10 phone:mx-4">
				<h4 className="mb-8 text-lg">{props.content}</h4>
			</div>
		</div>
	);
};

export default Paragraf;
