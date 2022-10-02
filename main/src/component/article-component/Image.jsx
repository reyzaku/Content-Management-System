import React from 'react';

const Image = (props) => {
	return (
		<div className="flex justify-center mb-16 mx-60">
			<img src={props.content} alt="asd" className='w-full h-96 object-cover rounded-xl'/>
		</div>
	);
};

export default Image;