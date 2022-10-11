import React from 'react';
import Explore from './explore/Explore';
import Navlink from './explore/Navlink';

const ExploreTab = () => {
	return (
		<div className="laptop:basis-1/4 desktop:basis-1/4 largerDevice:basis-1/6 max-w-full bg-white border-r-2 border-slate-100 desktop:block laptop:block tablet:hidden phone:hidden">
            <Navlink/>
			<Explore/>
		</div>
	);
};

export default ExploreTab;
