import React from 'react';
import CTAbanner from './Sidebar/CTAbanner';

const Sidebar = () => {
	return (
		<div className="desktop:flex laptop:flex tablet:hidden phone:hidden shrink">
			<CTAbanner/>
		</div>
	);
};

export default Sidebar;
