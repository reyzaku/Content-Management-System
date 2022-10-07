import React from 'react';
import { useDispatch } from 'react-redux';
import { editElement, removeElement } from '../../redux/ArticleReducers';

const AddParagraf = (props) => {
	const dispatch = useDispatch();

	return (
		<div className="block mx-20 mb-16 border-b pb-2 relative">
			<p className="text-3xl font-thin mb-8">Paragraf</p>
			<button
				className="absolute right-0 top-0 hover:text-blue-500"
				onClick={() => dispatch(removeElement({ _id: props.id }))}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
			<textarea
				name="paragraf"
				type="text"
				rows={4}
				className="text-xl w-full resize-y"
				placeholder="Write your Paragraf Here"
				onChange={(e) =>
					dispatch(editElement({ _id: props.id, content: e.target.value }))
				}
			/>
		</div>
	);
};

export default AddParagraf;
