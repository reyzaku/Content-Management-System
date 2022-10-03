import React from 'react';
import { useState } from 'react';
import Subtitle from '../article-component/Subtitle';

const AddSubtitle = (props) => {
	const [content, setContent] = useState("")

	

	const changeHandle = (e) => {
		e.preventDefault()
		setContent(e.target.value)
		props.func({type: Subtitle, content: content})
		console.log(content)
	}

	
	return (
		<div className="block mx-20 mb-16 border-b pb-2">
			<p className="text-3xl font-thin mb-8">Sub Title</p>
			<input
				name="subtitle"
				type="text"
				className="text-xl w-full font-semibold"
				placeholder="Write your Sub Title Here"
				onChange={changeHandle}
				value={content}
			/>
		</div>
	);
};

export default AddSubtitle;
