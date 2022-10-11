import React from 'react';
import Logo from '../media/Logo.png';

const Footer = () => {
	return (
		<footer className="footer items-center p-16 bg-white border-t border-slate-200 text-neutral-content">
			<div className="items-center grid-flow-col">
				<img src={Logo} alt="" className="block h-8 w-auto laptop:h-6" />
				<p>Copyright © 2022 - All right reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
