import React from 'react';

const AddImage = () => {
	return (
		<div className="block mx-20 mb-16 pb-2">
			<p className="text-3xl font-thin mb-8">Image</p>
			<div className="flex justify-center border py-16 rounded-xl">
				<input
					name="image"
					type="file"
					className="text-lg file:mr-4 file:py-2 file:px-4
									file:rounded-full file:border-0
									file:text-sm file:font-semibold
									file:bg-blue-50 file:text-blue-700
									hover:file:bg-violet-100"
					placeholder="Upload Image Cover"
				/>
			</div>
		</div>
	);
};

export default AddImage;
