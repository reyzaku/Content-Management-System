import React from 'react';
import Timeline from '../component/timeline-component/Timeline';
import ExploreTab from '../component/timeline-component/ExploreTab';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Homepage = () => {
	return (
		<>
			<Navbar />
			<div className="desktop:mx-60 laptop:mx-40 tablet:mx-10 phone:mx-4 flex flex-row gap-10 my-16 w-max-full">
				<ExploreTab />
				<Timeline />
			</div>
			<Footer/>
		</>
	);
};

export default Homepage;
