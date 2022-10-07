import React from 'react';
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from 'firebase/storage';
import app from '../../firebase';
import { useState } from 'react';
import { editElement, removeElement } from '../../redux/ArticleReducers';
import { useDispatch, useSelector } from 'react-redux';

const AddImage = (props) => {
	const image = useSelector((state) => state.article.element[props.id]);
	const [file, setFile] = useState(null);
	const [status, setStatus] = useState('ready');
	const [percentage, setPercentage] = useState(0);
	const [error, setError] = useState(false);

	const dispatch = useDispatch();

	const UploadImage = () => {
		if (file === null) {
			console.log('File Kosong!');
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
						dispatch(editElement({ _id: props.id, content: downloadURL }));
						setStatus('uploaded');
						setError(false);
						console.log('File available at', downloadURL);
					});
				}
			);
		}
	};

	const deleteImage = () => {
		dispatch(editElement({ _id: props.id, content: '' }));
		setStatus('ready');
		setFile(null);
	};

	return (
		<div className="block mx-20 mb-16 pb-2 relative">
			
			{status !== 'uploaded' && (
				<p className="text-3xl font-thin mb-8">Image</p>
			)}
			<button className='absolute right-0 top-0 hover:text-blue-500' onClick={() => dispatch(removeElement({ _id: props.id}))}>
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
			{status === 'ready' && (
				<div>
					<div className="flex justify-center border py-16 rounded-xl mb-8">
						<input
							name="image"
							type="file"
							accept="image/png, image/jpeg, image/jpg"
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
						className="border border-blue-500 px-8 py-2 text-blue-500 rounded-full"
						onClick={UploadImage}
					>
						Upload Image
					</button>
				</div>
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
						<img src={image.content} alt="" className="max-w-2xl rounded-lg" />
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
	);
};

export default AddImage;
