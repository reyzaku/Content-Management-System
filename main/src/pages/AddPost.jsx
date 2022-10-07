import React from 'react';
import { useState } from 'react';
import AddSubtitle from '../component/addpost-component/AddSubtitle';
import AddParagraf from '../component/addpost-component/AddParagraf';
import AddImage from '../component/addpost-component/AddImage';
import { useDispatch, useSelector } from 'react-redux';
import {
	addElement,
	deleteDraft,
	editCoverImage,
	editTags,
	editTitle,
} from '../redux/ArticleReducers';
import { authRequest } from '../utils/AxiosInstance';
import { useNavigate } from 'react-router-dom';
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from 'firebase/storage';
import app from '../firebase';

const AddPost = () => {
	const [show, setShow] = useState(false);
	const [error, setError] = useState(false);
	const dispatch = useDispatch();
	const elements = useSelector((state) => state.article.element);
	const article = useSelector((state) => state.article);
	const id = useSelector((state) => state.article.id);
	let navigate = useNavigate();

	//FOr Image Uploading
	//=================================================================//
	const [file, setFile] = useState(null);
	const [status, setStatus] = useState('ready');
	const [percentage, setPercentage] = useState(0);
	const image = useSelector((state) => state.article.cover_image);

	const UploadImage = () => {
		if (file === null) {
			setError(true);
		} else {
			const fileName = new Date().getTime() + file.name;
			const storage = getStorage(app);
			const storageRef = ref(storage, fileName);

			const uploadTask = uploadBytesResumable(storageRef, file);
			setStatus('uploading');
			// Register three observers:
			// 1. 'state_changed' observer, called any time the state changes
			// 2. Error observer, called on failure
			// 3. Completion observer, called on successful completion
			uploadTask.on(
				'state_changed',
				(snapshot) => {
					// Observe state change events such as progress, pause, and resume
					// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log('Upload is ' + progress + '% done');
					setPercentage(progress);
					switch (snapshot.state) {
						case 'paused':
							console.log('Upload is paused');
							break;
						case 'running':
							console.log('Upload is running');
							break;
						default:
							break;
					}
				},
				(error) => {
					// Handle unsuccessful uploads
				},
				() => {
					// Handle successful uploads on complete
					// For instance, get the download URL: https://firebasestorage.googleapis.com/...
					getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
						dispatch(editCoverImage(downloadURL));
						setStatus('uploaded');
						setError(false);
						console.log('File available at', downloadURL);
					});
				}
			);
		}
	};
	//=================================================================//
	// END OF UPLOADING SECTION //

	const showMenu = () => {
		setShow(true);
	};

	const closeMenu = () => {
		dispatch(deleteDraft());
	};

	const addBlocks = (e) => {
		e.preventDefault();
		let name = e.target.name;
		switch (name) {
			case 'paragraf':
				dispatch(addElement({ _id: id, type: 'paragraf', content: '' }));
				setShow(false);
				break;
			case 'subtitle':
				dispatch(addElement({ _id: id, type: 'subtitle', content: '' }));
				setShow(false);
				break;
			case 'image':
				dispatch(addElement({ _id: id, type: 'image', content: '' }));
				setShow(false);
				break;
			default:
				break;
		}
	};
	
	const deleteImage = () => {
		dispatch(editCoverImage(''))
		setStatus("ready")
		setFile(null)
	}

	const createPost = async (e) => {
		authRequest
			.post('/articles', article)
			.then(() => {
				navigate('/');
			})
			.catch((err) => {
				console.log(err);
			});
	};

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
					onChange={(e) => dispatch(editTags(e.target.value.split(' ')))}
				/>
			</div>
			{/* Cover Image Input Form */}
			<div className="block mb-16">
				<p className="text-3xl font-thin mb-8">Cover Image</p>

				{status === 'ready' && (
					<>
						<div className="flex justify-center py-16 border border-slate-300 rounded-lg">
							<input
								name="image"
								type="file"
								className="text-lg file:mr-4 file:py-2 file:px-4
										file:rounded-full file:border-0
										file:text-sm file:font-semibold
										file:bg-blue-50 file:text-blue-700
										hover:file:bg-violet-100"
								placeholder="Upload Image Cover"
								onChange={(e) => setFile(e.target.files[0])}
							/>
						</div>
						{error ? (
							<p className="text-red-500">Please insert your image first</p>
						) : (
							<></>
						)}
						<button
							className="border border-blue-500 px-8 py-2 mt-4 text-blue-500 rounded-full"
							onClick={UploadImage}
						>
							Upload Image
						</button>
					</>
				)}
				{status === 'uploading' && (
					<div>
						<div className="flex justify-center border py-16 rounded-xl px-4">
							<h1 className="text-blue-500 text-lg">
								Uploading {Math.round(percentage)} %
							</h1>
						</div>
					</div>
				)}
				{status === 'uploaded' && (
					<>
						<div className="flex justify-center">
							<img
								src={image}
								alt=""
								className="max-w-2xl rounded-lg w-full h-64 object-cover"
							/>
						</div>
						<button
							className="border border-blue-500 px-8 py-2 mt-4 text-blue-500 rounded-full"
							onClick={deleteImage}
						>
							Change Image
						</button>
					</>
				)}
			</div>

			{/* Show Mapping Element which have been added */}
			{elements.map((item, index) => {
				switch (item.type) {
					case 'subtitle':
						return <AddSubtitle key={index + 1} id={item._id} />;
					case 'paragraf':
						return <AddParagraf key={index + 1} id={item._id} />;
					case 'image':
						return <AddImage key={index + 1} id={item._id} />;
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
