import React from 'react'
import Sidebar from '../component/Sidebar';
import SideWidget from '../component/SideWidget';
import Timeline from '../component/Timeline';

const Homepage = () => {
  return (
    <div className='flex flex-row gap-10'>
        <Sidebar/>
        <Timeline/>
        <SideWidget/>
    </div>
  )
}

export default Homepage