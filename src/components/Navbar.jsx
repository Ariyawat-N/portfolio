import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='flex justify-center text-white p-5 text-2xl font-fontTwo'>
        <ul className='flex justify-between w-[40%]'>
          <Link to={"/"}>
            <li className='group text-white transition duration-300 hover:scale-125'>Home
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-cyan-300"></span>
            </li>
          </Link>

          <Link to={"/about"}>
            <li className='group text-white transition duration-300 hover:scale-125'>About
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-cyan-300"></span>
            </li>
          </Link>

          <Link to={"/projects"}>
            <li className='group text-white transition duration-300 hover:scale-125'>Projects
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-cyan-300"></span>
            </li>
          </Link>

          <Link to={"/contact"}>
            <li className='group text-white transition duration-300 hover:scale-125'>Contact
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-cyan-300"></span>
            </li>
          </Link>

        </ul>
    </nav>
  )
}

export default Navbar