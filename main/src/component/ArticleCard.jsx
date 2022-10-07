import React from 'react';
import Cover from '../media/cover.jpg';

const ArticleCard = (props) => {
	let data = props.data

	return (
		<div className="bg-white rounded-lg shadow-sm mb-4">
			<img
				src={data.cover_image}
				alt=""
				className="rounded-t-xl h-48 w-full object-cover"
			/>
			<div className="py-8 px-8">
				<div className="flex flex-row gap-2 items-center mb-4">
					<img src={Object.keys(data.user).includes("image") ? data.user.image : Cover} alt="" className='rounded-full w-8 h-8 bg-cover'/>
					<p className="text-sm text-slate-700">Rafi Abdilah</p>
				</div>
				{/* Article Title */}
				<h3 className="text-2xl font-semibold text-slate-700">
					{data.title? data.title : "placeholder"}
				</h3>
				{/* Article Tags */}
				<div className="flex flex-row gap-4 mt-4">
					{data.tags.map((item, index) => (
						<button className="text-blue-500 bg-blue-100 rounded-lg p-2" key={index + 1}>
							{item.name}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default ArticleCard;
