import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ElementContainer from '../component/ElementContainer';
import LoginForm from '../component/LoginForm';
import Paragraf from '../component/Paragraf';

const AddPost = () => {
	const [show, setShow] = useState(false);
	const [element, setElement] = useState([]);
	const ButtonHandle = () => {
		setShow(!true);
	};

	const elementHandle = (e) => {
        let name = e.target.name
        setElement(name)
        console.log(element)
	};

	return (
		<div>
			<button className="bg-blue-500 px-8 py-2" onClick={ButtonHandle}>
				Click me
			</button>
			{show && (
				<div>
					<button className="bg-red-500 p-4" name="subheading" onClick={elementHandle}>
						Subheading
					</button>
					<button className="bg-red-500 p-4" name="paragraf" onClick={elementHandle}>Paragraf</button>
					<button className="bg-red-500 p-4" name="image" onClick={elementHandle}>Image</button>
				</div>
			)}
			<ElementContainer test={false}/>
            
		</div>
	);
};

export default AddPost;
