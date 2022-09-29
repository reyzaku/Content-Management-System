import React from 'react';
import Logo from '../media/Logo.png';

const RegisterForm = () => {
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
				<form className="">
					<div className="mb-6">
						<label htmlFor="email" className="">
							E-mail
						</label>
						<input
							type="text"
							className="w-full py-2 border border-slate-300 rounded px-3 text-slate-500"
						/>
					</div>

                    <div className="mb-6">
						<label htmlFor="email" className="">
							Username
						</label>
						<input
							type="text"
							className="w-full py-2 border border-slate-300 rounded px-3 text-slate-500"
						/>
					</div>

                    <div className="mb-6">
						<label htmlFor="email" className="">
							Password
						</label>
						<input
							type="password"
							className="w-full py-2 border border-slate-300 rounded px-3 text-slate-500"
						/>
					</div>

					<div className="mb-10">
                        <div className="flex w-full gap-10">
                            <div>
                                <label htmlFor="email" className="">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full py-2 border border-slate-300 rounded px-3 text-slate-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="">
                                    Last Name
                                </label>
                                <label className='text-xs text-red-500'> (Optional)</label>
                                <input
                                    type="text"
                                    className="w-full py-2 border border-slate-300 rounded px-3 text-slate-500"
                                />
                                
                            </div>
                            
                        </div>
					</div>
					<div className="mb-6 ">
						<button
							type="submit"
							className="w-full bg-blue-600 py-2 text-white rounded shadow-lg"
						>
							Register
						</button>
                        <h3 className="text-center text-sm font-normal my-2">Or</h3>
                        <button
							type="submit"
							className="w-full bg-white py-2 text-blue-600 border border-blue-600 rounded"
						>
							Sign in
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegisterForm;
