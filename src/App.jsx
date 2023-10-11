import './App.css'
import Navbar from './components/Navbar'
import TypeWriter from './components/TypeWriter'
import { FaGithub,FaLinkedin } from "react-icons/fa6";
import Computer from './assets/computer-8bit-large11.webp'

function App() {
  return (
    <main className="bg-[url('./assets/5171481.jpg')] h-screen bg-no-repeat bg-cover flex justify-center items-center">
      <article className='backdrop-blur-sm w-[90%] h-[90%] rounded-3xl border border-gray-500 bg-black/50'>
        {/* Navbar */}
        <nav>
          <Navbar />
        </nav>
        <section className='flex h-[91%]'>
          {/* Left Content */}
         <div className='w-[50%] text-center flex flex-col justify-center items-center pb-60'>
          <TypeWriter />
          <p className='text-white mt-6 font-fontTwo w-[60%] text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum sequi dolor dolorum! Eligendi, fugiat. Esse sed ratione doloremque at. Magni reprehenderit repellat minima quibusdam omnis assumenda expedita vero dolorum at.</p>
           {/* Github & Linkedin */}
         <div className='flex justify-center scale-100 text-3xl gap-5 mt-5'>
            <a href="https://github.com/Ariyawat-N" className='text-white hover:text-cyan-300 hover:scale-150 transition ease-in-out delay-150'><FaGithub/></a>
            <a href="https://www.linkedin.com/in/ariyawat-nokyai/" className='text-white hover:text-cyan-300 hover:scale-150 transition ease-in-out delay-150'><FaLinkedin/></a>
         </div>
         </div>

         {/* Right Content */}
         <div className='flex justify-center items-center w-[50%]'>
          <img src={Computer} alt="Saly" className='scale-150'width={350}/>
         </div>
         
        </section>

      </article>


    </main>
  )
}

export default App
