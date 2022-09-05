import React from 'react'
import { FaPlay, FaPause, FaForward, FaBackward, FaStop } from 'react-icons/fa'

// !VA Lift up the click event handlers to the Slideshow3 parent component
//prettier-ignore
function Slideshow3Controls({
  prevSlide,
  nextSlide,
  playSlideshow,
  pauseSlideshow,
  resetSlideshow,
  play,
}) {

  return (
    <div className='slideshow3-controls'>
      <span className='prev' onClick={prevSlide}>
        <FaBackward />
      </span>
      <span className='next' onClick={nextSlide}>
        <FaForward />
      </span>
      { play === 'playing'  && (
        <>
          <span className='pause' onClick={pauseSlideshow}>
            <FaPause />
          </span>
        </>
        )
      }
      {/* NOTE: Don't forget to enclose multiple conditions in parentheses */}
      { (play === 'paused' || play === null) && (
        <>
          <span className='play' onClick={playSlideshow}>
            <FaPlay />
          </span>
        </>
        )
      }
      <span className='reset' onClick={resetSlideshow}>
        <FaStop />
      </span>
    </div>
  )
}

export default Slideshow3Controls
