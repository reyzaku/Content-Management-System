import React from 'react';
import Timeline from '../component/timeline-component/Timeline';
import ExploreTab from '../component/timeline-component/ExploreTab';
import Sidebar from '../component/timeline-component/Sidebar';

const Homepage = () => {
	return (
		<div className="h-screen desktop:mx-60 laptop:mx-40 tablet:mx-10 phone:mx-4 flex flex-row gap-10 mt-10 w-max-full">
			<ExploreTab/>
			<Timeline/>
		</div>
	);
};

export default Homepage;
