import React from 'react'
import TypewriterComponent from 'typewriter-effect'

const TypeWriter = () => {
  return (
    <div className='text-white font-bold text-5xl italic'>
        <TypewriterComponent
        options={{
        strings: ["Hi my name Ariyawat","Im an FullStack Developer"],
        autoStart: true,
        loop: true,
        delay:40,
      }}
    />
    </div>
  )
}

export default TypeWriter