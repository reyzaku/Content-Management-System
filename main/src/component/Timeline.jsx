import React from 'react';
import Cover from '../media/cover.jpg';

const Timeline = () => {
	return (
		<div className="h-screen mx-60 flex flex-row gap-10 mt-10">
      {/* Explorer Tab */}
			<div className="basis-1/5 bg-blue-100">
				<h3 className='text-2xl'>Explore</h3>
				<input type="text" className='mx-auto'/>
			</div>
			<div className="basis-1/2">
				{/* Article Card */}
				<div className="bg-white rounded-xl shadow-md">
					<img src={Cover} alt="" className="rounded-t-xl" />
					<div className="py-12 px-8">
						<div className="flex flex-row gap-4 items-center mb-8">
							<div className="rounded-full w-8 h-8 bg-black"></div>
							<p className="text-sm">Rafi Abdilah</p>
						</div>
						{/* Article Title */}
						<h3 className="text-2xl font-semibold">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
							sequi itaque inventore distinctio reiciendis magni exceptu
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
			</div>
      {/* Widget */}
			<div className='rounded-xl bg-blue-100 shadow-md h-1/4 basis-1/5 py-8 px-8'>
        <h3 className='text-3xl font-semibold mb-2 text-blue-800'>Join Foxhub for free!</h3>
        <p className='text-sm text-blue-600 mb-4'>We are the biggest Coding Forum in this year</p>
        <button className='bg-blue-500 text-white px-8 py-2 text-sm rounded-xl'>Join us</button>
      </div>
		</div>
	);
};

export default Timeline;
