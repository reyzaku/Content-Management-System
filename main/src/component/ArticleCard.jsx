import React from 'react';
import Cover from '../media/cover.jpg';

const ArticleCard = () => {
	return (
		<div className="bg-white rounded-lg shadow-sm mb-4">
			<img
				src={Cover}
				alt=""
				className="rounded-t-xl h-48 w-full object-cover"
			/>
			<div className="py-12 px-8">
				<div className="flex flex-row gap-4 items-center mb-8">
					<div className="rounded-full w-8 h-8 bg-black bg-cover"></div>
					<p className="text-sm">Rafi Abdilah</p>
				</div>
				{/* Article Title */}
				<h3 className="text-2xl font-semibold">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sequi
					itaque inventore distinctio reiciendis magni exceptu
				</h3>
				{/* Article Tags */}
				<div className="flex flex-row gap-4 mt-4">
					<button className="text-blue-500 bg-blue-100 rounded-lg p-2">
						#Javascript
					</button>
					<button className="text-red-500 bg-red-100 rounded-lg p-2">
						#React
					</button>
					<button className="text-yellow-500 bg-yellow-100 rounded-lg p-2">
						#Webdev
					</button>
					<button className="text-purple-500 bg-purple-100 rounded-lg p-2">
						#Frontend
					</button>
				</div>
				<div className="flex flex-row mt-8"></div>
			</div>
		</div>
	);
};

export default ArticleCard;
