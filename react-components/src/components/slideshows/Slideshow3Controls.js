import React from 'react'
import { FaPlay, FaPause, FaForward, FaBackward, FaStop } from 'react-icons/fa'

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className='slideshow3-controls'>
      <span className='prev' onClick={prevSlide}>
        <FaBackward />
      </span>
      <span className='next' onClick={nextSlide}>
        <FaForward />
      </span>
      <span className='play' onClick={play}>
        <FaPlay />
      </span>
      <span className='pause' onClick={pause}>
        <FaPause />
      </span>
      <span className='stop' onClick={stop}>
        <FaStop />
      </span>
    </div>
  )
}

export default Arrows
