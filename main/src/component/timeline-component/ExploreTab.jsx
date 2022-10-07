import React from 'react';
import Explore from './explore/Explore';
import Navlink from './explore/Navlink';

const ExploreTab = () => {
	return (
		<div className="basis-1/6 bg-white border-r-2 border-slate-100">
            <Navlink/>
			<Explore/>
		</div>
	);
};

export default ExploreTab;
