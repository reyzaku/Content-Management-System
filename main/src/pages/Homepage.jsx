import React from 'react';
import Timeline from '../component/timeline-component/Timeline';
import ExploreTab from '../component/timeline-component/ExploreTab';
import Sidebar from '../component/timeline-component/Sidebar';

const Homepage = () => {
	return (
		<div className="h-screen mx-60 flex flex-row gap-10 mt-10">
			<ExploreTab/>
			<Timeline/>
			<Sidebar/>
		</div>
	);
};

export default Homepage;
