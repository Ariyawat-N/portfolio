import './App.css'
import Navbar from './components/Navbar'
import Saly from './assets/Saly-13.svg'
import TypeWriter from './components/TypeWriter'

function App() {
  return (
    <main className="bg-[url('./assets/backgroundImage.svg')] h-screen bg-no-repeat bg-cover flex justify-center items-center">
      <article className='backdrop-blur-md w-[90%] h-[90%] rounded-3xl border border-gray-500'>
        {/* Navbar */}
        <nav>
          <Navbar />
        </nav>
        <section className='flex h-[91%]'>
          {/* Left Content */}
         <div className='w-[50%] text-center p-[150px]'>
          <TypeWriter />
          <p className='text-white mt-6 font-ligh'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum sequi dolor dolorum! Eligendi, fugiat. Esse sed ratione doloremque at. Magni reprehenderit repellat minima quibusdam omnis assumenda expedita vero dolorum at.</p>
         </div>

         {/* Right Content */}
         <div className='flex justify-center items-center w-[50%]'>
          <img src={Saly} alt="Saly" className='scale-150'/>
         </div>
        </section>

      </article>


    </main>
  )
}

export default App
