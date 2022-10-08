import React from 'react';

const Subtitle = (props) => {
	return (
		<div className="">
			<div className="desktop:mx-40 laptop:mx-40 tablet:mx-10 phone:mx-4">
				<h4 className="mb-8 font-semibold text-2xl">{props.content}</h4>
			</div>
		</div>
	);
};

export default Subtitle;
