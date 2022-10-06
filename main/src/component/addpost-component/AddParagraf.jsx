import React from 'react';
import { useDispatch} from 'react-redux';
import { editElement } from '../../redux/ArticleReducers';

const AddParagraf = (props) => {
	const dispatch = useDispatch()

	return (
		<div className="block mx-20 mb-16 border-b pb-2">
			<p className="text-3xl font-thin mb-8">Paragraf</p>
			<textarea
				name="paragraf"
				type="text"
				rows={4}
				className="text-xl w-full resize-y"
				placeholder="Write your Paragraf Here"
				onChange={(e) => dispatch(editElement({_id: props.id, content: e.target.value}))}
			/>
		</div>
	);
};

export default AddParagraf;
