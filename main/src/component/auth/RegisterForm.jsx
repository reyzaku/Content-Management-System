import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Logo from '../../media/Logo.png';
import { publicRequest } from '../../utils/AxiosInstance';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/AuthCall';

const RegisterForm = () => {
	const [data, setData] = useState({});
	let navigate = useNavigate();
	const dispatch = useDispatch();

	const RegisterHandle = (e) => {
		e.preventDefault()
		publicRequest.post(`/auth/register`, data).then(
			async (res) => {
				await login(dispatch, data)
				navigate("/")
				
			}
		).catch(err => {
			console.log(err)
		})
	}

	return (
		<div className="flex min-h-full items-center justify-center h-screen">
			<div className="w-1/3 px-10 py-10 bg-white rounded-lg shadow-xl shadow-blue-200/50 flex-col">
				<div className="flex item-center justify-center">
					<img src={Logo} alt="" className="w-1/2 my-10 " />
				</div>
				<h3 className="text-center text-lg font-normal">Welcome to Foxhub</h3>
				<h3 className="text-center text-2xl font-semibold mb-10">
					Register your account
				</h3>
				{/* <form> */}
					<div className="mb-6">
						<label className="">
							E-mail
						</label>
						<input
							type="text"
							className="w-full py-2 border border-slate-300 rounded px-3 text-slate-500"
							name="email"
							onChange={(e) => setData({ ...data, email: e.target.value })}
						/>
					</div>

					<div className="mb-6">
						<label className="">
							Username
						</label>
						<input
							type="text"
							className="w-full py-2 border border-slate-300 rounded px-3 text-slate-500"
							name="username"
							onChange={(e) =>
								setData({ ...data, username: e.target.value })
							}
						/>
					</div>

					<div className="mb-6">
						<label className="">
							Password
						</label>
						<input
							type="password"
							className="w-full py-2 border border-slate-300 rounded px-3 text-slate-500"
							name="password"
							onChange={(e) =>
								setData({ ...data, password: e.target.value })
							}
						/>
					</div>

					<div className="mb-10">
						<div className="flex w-full gap-10">
							<div>
								<label className="">
									First Name
								</label>
								<input
									type="text"
									className="w-full py-2 border border-slate-300 rounded px-3 text-slate-500"
									name="firstname"
									onChange={(e) =>
										setData({ ...data, firstname: e.target.value })
									}
								/>
							</div>
							<div>
								<label className="">
									Last Name
								</label>
								<label className="text-xs text-red-500"> (Optional)</label>
								<input
									type="text"
									className="w-full py-2 border border-slate-300 rounded px-3 text-slate-500"
									name="lastname"
									onChange={(e) =>
										setData({ ...data, lastname: e.target.value })
									}
								/>
							</div>
						</div>
					</div>
					<div className="mb-6 ">
						<button
							onClick={RegisterHandle}
							className="w-full bg-blue-600 py-2 text-white rounded shadow-lg"
						>
							Register
						</button>
						<h3 className="text-center text-sm font-normal my-2">Or</h3>
						<button
							className="w-full bg-white py-2 text-blue-600 border border-blue-600 rounded"
							
						>
							Sign in
						</button>
					</div>
				{/* </form> */}
			</div>
		</div>
	);
};

export default RegisterForm;
