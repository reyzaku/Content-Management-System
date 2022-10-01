import React from 'react';
import Cover from '../media/cover.jpg';

const SinglePost = () => {
	return (
		<div className="bg-white h-full pt-24 mx-60 mb-20 mt-10">
			{/* Tags Container */}
			<div className="flex flex-row gap-4 mt-4 justify-center mb-16">
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
			<p className='text-center mb-4'>24 September 2022</p>
			{/* Title Container */}
			<div className="flex justify-center mb-8" id="title">
				<h1 className="text-6xl font-bold">
					How to be succesfull as Web Developer
				</h1>
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
			<div className="flex justify-center">
				<div className='px-16'>
                    <h4 className='mb-8 font-semibold text-2xl'>What is Web Developer</h4>
					<p className="leading-loose mb-8">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
						fermentum, arcu lobortis porta varius, sem lorem iaculis turpis, a
						fringilla erat justo in augue. Praesent non augue mauris. Interdum
						et malesuada fames ac ante ipsum primis in faucibus. Pellentesque
						fringilla nisi libero. Mauris dui nibh, molestie nec arcu at,
						placerat suscipit odio. Duis imperdiet accumsan sapien, at semper
						turpis finibus et. Integer euismod malesuada sapien, a tristique
						erat cursus sed. Mauris imperdiet accumsan ligula, mattis pulvinar
						magna semper at. Vivamus sit amet odio ut tellus volutpat accumsan
						eu ut erat. Fusce vel eros quis sem consectetur semper.
					</p>
				</div>
			</div>
		</div>
	);
};

export default SinglePost;
