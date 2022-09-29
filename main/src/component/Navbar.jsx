import React from 'react'
import Logo from "../media/Logo.png"

const Navbar = () => {
  return (
    <nav className='bg-white shadow-lg shadow-gray-100/70 h-16 flex'>
        {/* Break Into 3 Section */}
        <div className='flex flex-row mx-60 items-center'>
            {/* Section 1 Logo Section*/}
            <div className='flex-1 items-center'>
                <img src={Logo} alt="" className='w-1/4'/>
            </div>
            {/* Section 2 Navlink Section*/}
            <div className='flex-1 flex flex-row gap-8 items-center '>
                <li className='list-none hover:font-bold hover:text-blue-500'>Home</li>
                <li className='list-none text-gray-600 hover:font-bold hover:text-blue-500'>Navigation</li>
                <li className='list-none text-gray-600 hover:font-bold hover:text-blue-500'>Test</li>
                <li className='list-none text-gray-600 hover:font-bold hover:text-blue-500'>Profile</li>
                <li className='list-none text-gray-600 hover:font-bold hover:text-blue-500'>Test</li>
            </div>
            {/* Section 3 Auth Button Section*/}
            <div className='flex-1 flex flex-row justify-end gap-4 align-middle'>
                <button className='px-6 py-2'>Login</button>
                <button className='border border-blue-500 px-6 py-2 rounded-md'>Register</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar