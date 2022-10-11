import React from 'react';

const Image = (props) => {
	return (
		<div className="flex justify-center mb-16 desktop:mx-60 laptop:mx-40 tablet:mx-10 phone:mx-4">
			<img src={props.content} alt="asd" className='w-full h-full object-cover rounded-xl'/>
		</div>
	);
};

export default Image;