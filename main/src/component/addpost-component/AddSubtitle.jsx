import React from 'react';
import { useDispatch } from 'react-redux';
import { editElement } from '../../redux/ArticleReducers';

const AddSubtitle = (props) => {
	const dispatch = useDispatch()

	return (
		<div className="block mx-20 mb-16 border-b pb-2">
			<p className="text-3xl font-thin mb-8">Sub Title</p>
			<input
				name="subtitle"
				type="text"
				className="text-xl w-full font-semibold"
				placeholder="Write your Sub Title Here"
				onChange={(e) => dispatch(editElement({_id: props.id, content: e.target.value}))}
			/>
		</div>
	);
};

export default AddSubtitle;
