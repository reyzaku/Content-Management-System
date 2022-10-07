import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Image from '../component/article-component/Image';
import Paragraf from '../component/article-component/Paragraf';
import Subtitle from '../component/article-component/Subtitle';
import Error401 from '../component/error-notice/Error401';
import Cover from '../media/cover.jpg';
import { publicRequest } from '../utils/AxiosInstance';

const SinglePost = () => {
	const [article, setArticle] = useState({});
	const [tags, setTags] = useState([]);
	const { id } = useParams();
	// const isImage = Object.keys(article.user).includes("image")
	console.log(article)

	useEffect(() => {
		fetchData()
	}, []);

	const fetchData = () => {
		publicRequest.get(`/article/${id}`).then((response) => {
			const newArticle = response.data
			setTags(response.data.tags)
			setArticle(newArticle)
		}).catch(error => console.error(`error ${error}`))
	};

	return (
		<div className="bg-white h-full pt-24 mx-60 mb-20 mt-10">
			{article == null && <Error401 />}
			{/* Tags Container */}
			<div className="flex flex-row gap-4 mt-4 justify-center mb-16">
				{tags.map((item, index) => (
					<button
						className="text-blue-500 bg-blue-100 rounded-lg p-2"
						key={index + 1}
					>
						{'#' + item.name.charAt(1).toUpperCase() + item.name.slice(2)}
					</button>
				))}
			</div>
			<p className="text-center mb-4">24 September 2022</p>
			{/* Title Container */}
			<div className="flex justify-center mb-8" id="title">
				<h1 className="text-6xl font-bold text-center">{article.title}</h1>
			</div>
			{/* Creator Container */}
			<div className="flex flex-col items-center mb-24 justify-center">
				<div className="flex flex-row gap-2 items-center mb-16">
				{/* article && Object.keys(article.user).includes("image") ? article.user.image :  */}
					<img src={Cover} alt="" className="w-10 h-10 rounded-full" />
					{/* article.user.image === undefined ? Cover : article.user.image */}
					{/* ${article.user.firstname} ${article.user.lastname} */}
					<p className="text-xl">{Object.keys(article).length !== 0 ? `by ${article.user.firstname} ${article.user.lastname}` : "by user"}</p>
				</div>
			</div>
			{/* Imgage Cover Container */}
			<div className="flex justify-center mb-24">
				<img
					src={article.cover_image}
					alt=""
					className="w-full h-96 object-cover rounded-xl"
				/>
			</div>
			{/* Paragraf Container */}
			{article.element?.map((item) => {
				switch (item.type) {
					case 'subtitle':
						return <Subtitle content={item.content} key={item._id} />;
					case 'paragraf':
						return <Paragraf content={item.content} key={item._id} />;
					case 'image':
						return <Image content={item.content} key={item._id} />;
					default:
						return <></>;
				}
			})}
		</div>
	);
};

export default SinglePost;
