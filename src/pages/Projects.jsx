import React from 'react'
import Navbar from '../components/Navbar'

const Projects = () => {
  return (
    <div className="bg-[url('./assets/backgroundImage.svg')] h-screen bg-no-repeat bg-cover flex justify-center items-center">
      <div className='backdrop-blur-sm w-[90%] h-[90%] rounded-3xl border border-gray-500'>
        <Navbar />
      </div>
    </div>
  )
}

export default Projects