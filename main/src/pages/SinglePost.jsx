import React from 'react';
import { useState } from 'react';
import Image from '../component/article-component/Image'
import Paragraf from '../component/article-component/Paragraf';
import Subtitle from '../component/article-component/Subtitle';
import { SingleArticle } from '../dummy_data/SingleArticle';
import Cover from '../media/cover.jpg';

const SinglePost = () => {
	const [article] = useState(SingleArticle);
	console.log(article);
	return (
		<div className="bg-white h-full pt-24 mx-60 mb-20 mt-10">
			{/* Tags Container */}
			<div className="flex flex-row gap-4 mt-4 justify-center mb-16">
				{article.tags.map((item, index) => (
					<button
						className="text-blue-500 bg-blue-100 rounded-lg p-2"
						key={index + 1}
					>
						{"#" + item.charAt(1).toUpperCase() + item.slice(2)}
					</button>
				))}
			</div>
			<p className="text-center mb-4">24 September 2022</p>
			{/* Title Container */}
			<div className="flex justify-center mb-8" id="title">
				<h1 className="text-6xl font-bold">{article.title}</h1>
			</div>
			{/* Creator Container */}
			<div className="flex flex-col items-center mb-24 justify-center">
				<div className="flex flex-row gap-4 items-center mb-16">
					<img src={Cover} alt="" className="w-12 h-12 rounded-full" />
					<p className="text-xl">by Rafi Abdilah</p>
				</div>
			</div>
			{/* Imgage Cover Container */}
			<div className="flex justify-center mb-24">
				<img
					src={Cover}
					alt=""
					className="w-full h-96 object-cover rounded-xl"
				/>
			</div>
			{/* Paragraf Container */}
			{article.element.map((item) => {
				switch (item.type) {
					case 'subtitle':
						return <Subtitle content={item.content} key={item._id}/>;
					case 'paragraf':
						return <Paragraf content={item.content} key={item._id}/>;
					case 'image':
						return <Image content={item.content} key={item._id}/>;
					default:
						return <></>;
				}
			})}
		</div>
	);
};

export default SinglePost;
