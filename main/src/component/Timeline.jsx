import React from 'react';

import ArticleCard from './ArticleCard';

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
				<ArticleCard/>
				<ArticleCard/>
				<ArticleCard/>
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
