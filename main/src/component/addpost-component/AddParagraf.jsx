import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { editElement } from '../../redux/ArticleReducers';

const AddParagraf = (props) => {
	const paragraf = useSelector(state => state.article.element[props.id])
	const dispatch = useDispatch()

	return (
		<div className="block mx-20 mb-16 border-b pb-2">
			{paragraf.content === null &&(
				<p className="text-3xl font-thin mb-8">Paragraf</p>
			)}
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
