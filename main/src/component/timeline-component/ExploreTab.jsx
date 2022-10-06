import React from 'react';
import Explore from './explore/Explore';
import Navlink from './explore/Navlink';

const ExploreTab = () => {
	return (
		<div className="basis-1/5 bg-white border-slate-100">
            <Navlink/>
			<Explore/>
		</div>
	);
};

export default ExploreTab;
