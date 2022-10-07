import React from 'react';
import Logo from '../media/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/UserReducers';

const Navbar = () => {
	const user = useSelector((state) => state.user.currentUser);
	const navigate = useNavigate();
    const dispatch = useDispatch()

	const LogoutHandle = () => {
		dispatch(logout())
        navigate("/")
	}
	return (
		<nav className="bg-white shadow-sm">
			<div className="mx-60 max-w-full">
				<div className="relative flex h-16 items-center justify-between">
					<div className="text-white basis-1/3" id="logo">
						<Link to={'/'}>
							<img src={Logo} alt="" className="block h-8 w-auto" />
						</Link>
					</div>
					<div className="text-black flex flex-row basis-1/3" id="search">
						<input
							type="text"
							name=""
							id=""
							className="w-full py-2 px-2 bg-slate-100 rounded-l-lg"
						/>
						<button className="px-2 py-2 bg-blue-500 rounded-r-lg">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6 text-white"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
								/>
							</svg>
						</button>
					</div>
					<div
						className="text-white basis-1/3 flex justify-end items-center gap-4"
						id="auth"
					>
						{user ? (
							<button className="text-blue-500 font-semibold text-sm rounded py-2 px-4 border border-slate-50" onClick={LogoutHandle}>
								Logout
							</button>
						) : (
							<Link to={'/register'}>
								<button className="text-blue-500 font-semibold text-sm rounded py-2 px-4 border border-slate-50">
									Login/Register
								</button>
							</Link>
						)}

						<div>
							<button
								type="button"
								class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
								id="user-menu-button"
								aria-expanded="false"
								aria-haspopup="true"
							>
								<span class="sr-only">Open user menu</span>
								<img
									class="h-8 w-8 rounded-full"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

// <nav className="bg-white shadow-lg shadow-gray-100/70 h-16 flex mx-60 flex-row justify-between items-center">

// </nav>
// {
// 	/* Break Into 3 Section */
// }
// <div className="flex flex-row items-center justify-between">
// 	{/* Section 1 Logo Section*/}
// 	<div className="flex-1 items-center">
// 		<img src={Logo} alt="" className="w-1/4" />
// 	</div>
// 	{/* Section 2 Navlink Section*/}
<div className="flex-1 flex flex-row items-center">
	<input
		type="text"
		name="search"
		id=""
		className="px-2 w-full py-2 bg-blue-50 rounded-l-lg"
	/>
	<button className="px-2 py-2 bg-blue-500 rounded-r-lg">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6 text-white"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
			/>
		</svg>
	</button>
</div>;
// 	{/* Section 3 Auth Button Section*/}
// 	<div className="flex-1 flex flex-row gap-4">
// 		<button className="px-6 py-2">Login</button>
// 		<button className="border border-blue-500 px-6 py-2 rounded-md">
// 			Register
// 		</button>
// 	</div>
// </div>;
