import React, { useState } from 'react';
import Logo from '../media/Logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/UserReducers';
import { authRequest } from '../utils/AxiosInstance';

const Navbar = () => {
	const user = useSelector((state) => state.user.currentUser);
	const [show, setShow] = useState(false);
	const [menu, setMenu] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [search, setSearch] = useState('');

	const LogoutHandle = async () => {
		await authRequest.delete('/auth/logout');
		dispatch(logout());
		setShow(false);
		navigate('/');
	};

	const SearchHandle = () => {
		navigate(`/article/${search}`);
	};

	return (
		<nav className="bg-white shadow-sm sticky top-0">
			<div className="desktop:mx-60 laptop:mx-40 tablet:mx-10 phone:mx-4 max-w-full">
				{/* Mobile Menu Button */}
				<div className="phone:flex tablet:flex laptop:hidden desktop:hidden">
					<button
						type="button"
						class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
						aria-controls="mobile-menu"
						aria-expanded="false"
						onClick={() => setMenu(!menu)}
					>
						<span class="sr-only">Open main menu</span>
						<svg
							class="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
						<svg
							class="hidden h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				{menu && (
					<div className="tablet:mx-5 phone:mx-2 py-8">
						<div className="flex flex-col gap-4 mb-8">
							<li className="list-none text-md text-center">
								<Link to={`/`}>&#127969; Home</Link>
							</li>
							<li className="list-none text-md text-center">
								<Link to={`/article`}>&#128240; Article</Link>
							</li>
							<li className="list-none text-md text-center">
								<Link to={`/editor`}>&#128221; Create Post</Link>
							</li>
							<li className="list-none text-md text-center">
								<Link to={`/editor`}>&#128187; My Dashboard</Link>
							</li>
						</div>
					</div>
				)}
				{/* Desktop Navbar Menu */}
				<div className="relative flex h-16 items-center justify-between desktop:flex laptop:flex tablet:hidden phone:hidden">
					<div className="text-white basis-1/3" id="logo">
						<Link to={'/'}>
							<img src={Logo} alt="" className="block h-8 w-auto laptop:h-6" />
						</Link>
					</div>
					<div className="text-black flex flex-row basis-1/3" id="search">
						<input
							type="text"
							className="w-full desktop:py-2 laptop:py-1 px-2 bg-slate-100 rounded-l-lg"
							onChange={(e) => setSearch(e.target.value)}
						/>
						<button
							className="px-2 py-2 laptop:py-1 bg-blue-500 rounded-r-lg"
							onClick={SearchHandle}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="desktop:w-6 desktop:h-6 laptop:w-4 laptop:h-4 text-white"
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
							<></>
						) : (
							// <button
							// 	className="text-blue-500 font-semibold text-sm rounded py-2 px-4 border border-slate-50"
							// 	onClick={LogoutHandle}
							// >
							// 	Logout
							// </button>
							<Link to={'/register'}>
								<button className="text-blue-500 font-semibold desktop:text-sm laptop:text-xs rounded desktop:py-2 laptop:py-2 px-4 border border-slate-50">
									Login/Register
								</button>
							</Link>
						)}

						<div className="relative">
							<div>
								<button
									type="button"
									class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
									id="user-menu-button"
									aria-expanded="false"
									aria-haspopup="true"
									onClick={() => setShow(!show)}
								>
									<span class="sr-only">Open user menu</span>
									<img
										class="h-8 w-8 rounded-full"
										src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										alt=""
									/>
								</button>
							</div>
							{show ? (
								<div
									class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="user-menu-button"
									tabindex="-1"
								>
									<button
										class="block px-4 py-2 text-sm text-gray-700"
										role="menuitem"
										tabindex="-1"
										id="user-menu-item-0"
									>
										Your Profile
									</button>
									<button
										class="block px-4 py-2 text-sm text-gray-700"
										role="menuitem"
										tabindex="-1"
										id="user-menu-item-1"
									>
										Settings
									</button>
									<section
										className=" w-screen h-full cursor-pointer "
										onClick={() => {
											setShow(false);
										}}
									></section>
									{user ? (
										<button
											onClick={LogoutHandle}
											class="block px-4 py-2 text-sm text-gray-700"
											role="menuitem"
											tabindex="-1"
											id="user-menu-item-2"
										>
											Sign out
										</button>
									) : (
										<></>
									)}
								</div>
							) : (
								<></>
							)}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
