import React from 'react';

const AddParagraf = () => {
	return (
		<div className="block mx-20 mb-16 border-b pb-2">
			<p className="text-3xl font-thin mb-8">Paragraf</p>
			<input
				name="paragraf"
				type="text"
				className="text-xl w-full"
				placeholder="Write your Paragraf Here"
			/>
		</div>
	);
};

export default AddParagraf;
