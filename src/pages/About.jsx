import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <main className="bg-[url('./assets/5171481.jpg')] h-screen bg-no-repeat bg-cover flex justify-center items-center">
      <div className='backdrop-blur-sm w-[90%] h-[90%] rounded-3xl border border-gray-500 bg-black/50'>
        <Navbar />
        <article className='w-[100%] h-[91%] flex justify-center'>
          <section className='w-[55%] text-left flex flex-col justify-center'>
            <p className='text-white'>
              I am a graduate of Generation's Junior Software Developer Bootcamp with over a year of experience in the logistics field,<br />I am a dedicated and technically skilled individual with a strong passion for software development. I believe that through dedication, effort, and a commitment to continuous learning, I can consistently enhance my skills and achieve my goals. I am highly motivated to apply my knowledge to an organization dedicated to utilizing technology to enhance the lives of people.</p>
          </section>
        </article>
      </div>
    </main>
  )
}

export default About 