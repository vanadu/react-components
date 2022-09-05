import React from 'react'
import { FaPlay, FaPause, FaForward, FaBackward, FaStop } from 'react-icons/fa'

function Arrows({
  prevSlide,
  nextSlide,
  playSlideshow,
  pauseSlideshow,
  resetSlideshow,
}) {
  return (
    <div className='slideshow3-controls'>
      <span className='prev' onClick={prevSlide}>
        <FaBackward />
      </span>
      <span className='next' onClick={nextSlide}>
        <FaForward />
      </span>
      <span className='play' onClick={playSlideshow}>
        <FaPlay />
      </span>
      <span className='pause' onClick={pauseSlideshow}>
        <FaPause />
      </span>
      <span className='reset' onClick={resetSlideshow}>
        <FaStop />
      </span>
    </div>
  )
}

export default Arrows
