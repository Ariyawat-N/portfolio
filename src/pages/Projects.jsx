import React from 'react'
import Navbar from '../components/Navbar'
import fmh from '../assets/find your banana.png'
import colmar from '../assets/colmar.png'
import weatherapp from '../assets/WeatherApp.png'
import countryapi from '../assets/filter-country-api.png'
import keeperapp from '../assets/keeperapp.png'

const Projects = () => {
  return (
    <div className="bg-[url('./assets/5171481.jpg')] h-screen bg-no-repeat bg-cover flex justify-center items-center">
      <div className='backdrop-blur-sm w-[90%] h-[90%] rounded-3xl border border-gray-500 bg-black/50'>
        <Navbar />
        <section className="h-[91.2%] w-[100%] items-center justify-center flex ">
          <div className="w-[70%] h-[80%] rounded-3xl border-2 border-cyan-500 flex flex-col items-center ">
           <div className='h-[50%] w-[100%] flex justify-evenly items-center '>
              <div className='w-[25%] h-[70%] '>
                <a href="https://replit.com/@Ariyawat/02-find-your-hat" target="_blank"><img src={fmh} alt="find my hat" className='transition ease-in-out delay-75 h-[100%] w-[100%] object-cover rounded-3xl hover:shadow-2xl hover:shadow-blue-500 hover:scale-105'/></a>
              </div>
              <div className='w-[25%] h-[70%]'>
                <a href="https://colmar-exam-ariyawat.vercel.app/" target="_blank"><img src={colmar} alt="colmar" className='transition ease-in-out delay-75 h-[100%] w-[100%] object-cover rounded-3xl hover:shadow-2xl hover:shadow-blue-500 hover:scale-105'/></a>
              </div>
              <div className='w-[25%] h-[70%]'>
                <a href="https://weather-app-xi-two-65.vercel.app/" target="_blank"><img src={weatherapp} alt="weatherapp" className='transition ease-in-out delay-75 h-[100%] w-[100%] object-cover rounded-3xl hover:shadow-2xl hover:shadow-blue-500 hover:scale-105'/></a>
              </div>
           </div>

           <div className='h-[50%] w-[100%] flex justify-evenly items-center'>
              <div className='w-[25%] h-[70%]'>
                <a href="https://search-filter-country-api.vercel.app/" target="_blank"><img src={countryapi} alt="countryapi" className='transition ease-in-out delay-75 h-[100%] w-[100%] object-cover rounded-3xl hover:shadow-2xl hover:shadow-blue-500 hover:scale-105'/></a>
              </div>
              <div className='w-[25%] h-[70%]'>
                <a href="https://codesandbox.io/s/keeper-part-3-completed-forked-wl45r2?file=/src/components/CreateArea.jsx" target="_blank"><img src={keeperapp} alt="keeperapp" className='transition ease-in-out delay-75 h-[100%] w-[100%] object-cover rounded-3xl hover:shadow-2xl hover:shadow-blue-500 hover:scale-105'/></a>
              </div>
              <div className='w-[25%] h-[70%]'>
                <a href="https://replit.com/@Ariyawat/02-find-your-hat" target="_blank"><img src={fmh} alt="find my hat" className='transition ease-in-out delay-75 h-[100%] w-[100%] object-cover rounded-3xl hover:shadow-2xl hover:shadow-blue-500 hover:scale-105'/></a>
              </div>
           </div>
           
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projects