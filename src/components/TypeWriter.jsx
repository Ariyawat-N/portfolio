import React from 'react'
import TypewriterComponent from 'typewriter-effect'

const TypeWriter = () => {
  return (
    <div className='text-white font-bold text-[44px] italic mt-12'>
      {/* text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 */}
        <TypewriterComponent
        options={{
        strings: ["Hi my name Ariyawat","Im an FullStack Developer"],
        autoStart: true,
        loop: true,
        delay:30,
      }}
    />
    </div>
  )
}

export default TypeWriter