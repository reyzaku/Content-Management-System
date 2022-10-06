import React from 'react';
import { useState } from 'react';
import AddSubtitle from '../component/addpost-component/AddSubtitle'
import AddParagraf from '../component/addpost-component/AddParagraf'
import AddImage from '../component/addpost-component/AddImage'
import { useDispatch, useSelector } from 'react-redux';
import { addElement, deleteDraft, editTags, editTitle } from '../redux/ArticleReducers';
import { authRequest } from '../utils/AxiosInstance';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
	const [show, setShow] = useState(false);
	const dispatch = useDispatch()
	const elements = useSelector(state => state.article.element)
	const article = useSelector(state => state.article)
	const id = useSelector(state => state.article.id)
	let navigate = useNavigate();

	const showMenu = () => {
		setShow(true);
	};

	const closeMenu = () => {
		dispatch(deleteDraft())
	};

	const addBlocks = (e) => {
		e.preventDefault();
		let name = e.target.name;
		switch (name) {
			case 'paragraf':
				dispatch(addElement({_id: id, type: "paragraf", content: ""}))
				setShow(false);
				break;
			case 'subtitle':
				dispatch(addElement({_id: id, type: "subtitle", content: ""}))
				setShow(false);
				break;
			case 'image':
				dispatch(addElement({_id: id, type: "image", content: ""}))
				setShow(false);
				break;
			default:
				break;
		}
	};

	const createPost = async (e) => {
		authRequest.post("/articles", article).then(
			() => {
				navigate("/")
				
			}
		).catch(err => {
			console.log(err)
		})
	}

	return (
		<div className="h-full pt-24 mx-60 mb-20 mt-10">
			{/* Post Title Input Form */}
			<div className="block mb-16">
				<p className="text-3xl font-thin mb-8">Post Title</p>
				<input
					name="title"
					type="text"
					className="text-5xl font-bold w-full"
					placeholder="Write your title here"
					onChange={(e) => dispatch(editTitle(e.target.value))}
				/>
			</div>
			{/* Tags Input Form */}
			<div className="block mb-16">
				<p className="text-3xl font-thin mb-8">Tags</p>
				<input
					name="tags"
					type="text"
					className="text-2xl w-full"
					placeholder="Add Tags to your Post here"
					onChange={(e) => dispatch(editTags(e.target.value.split(" ")))}
				/>
			</div>
			{/* Cover Image Input Form */}
			<div className="block mb-16">
				<p className="text-3xl font-thin mb-8">Cover Image</p>
				<div className='flex justify-center py-16 border border-slate-300 rounded-lg bg-[url("https://picsum.photos/seed/picsum/200/300")] bg-cover'>
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

			

			{/* Show Mapping Element which have been added */}
			{elements.map((item,index) => {
				switch (item.type) {
					case 'subtitle':
						return <AddSubtitle key={index + 1} id={item._id}/>;
					case 'paragraf':
						return <AddParagraf key={index + 1} id={item._id}/>;
					case 'image':
						return <AddImage key={index + 1} id={item._id}/>;
					default:
						return <></>;
				}
			})}

			{/* Element Menu Button */}
			<div className="block mb-16">
				<div className="flex justify-center">
					<button
						className="w-16 h-16 border border-slate-300 rounded-full flex justify-center items-center hover:border-slate-500"
						onClick={showMenu}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6 text-slate-500"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 4.5v15m7.5-7.5h-15"
							/>
						</svg>
					</button>
				</div>
			</div>

			{/* When Element Menu Button CLicked, Show this */}
			{/* Element Menu Button */}
			{show && (
				<div className="flex flex-row gap-4 mt-4 justify-center mb-16">
					{/* Paragraf */}
					<button
						className="text-blue-500 bg-blue-100 rounded-lg p-2"
						name="paragraf"
						onClick={addBlocks}
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
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
							/>
						</svg>
					</button>

					{/* Sub Title */}
					<button
						className="text-red-500 bg-red-100 rounded-lg p-2"
						name="subtitle"
						onClick={addBlocks}
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
								d="M3.75 9h16.5m-16.5 6.75h16.5"
							/>
						</svg>
					</button>

					{/* Image */}
					<button
						className="text-yellow-500 bg-yellow-100 rounded-lg p-2"
						name="image"
						onClick={addBlocks}
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
								d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
							/>
						</svg>
					</button>
				</div>
			)}

			{/* Button Create Post */}
			<div className="block float-right">
				<button
					className="px-12 py-3 bg-blue-500 text-white rounded-xl shadow-lg"
					onClick={createPost}
				>
					Create Post
				</button>

				<button
					className="px-12 py-3 bg-red-500 text-white rounded-xl shadow-lg"
					onClick={closeMenu}
				>
					Delete Post
				</button>
			</div>
		</div>
	);
};

export default AddPost;
