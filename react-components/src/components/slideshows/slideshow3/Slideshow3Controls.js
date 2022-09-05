import React from 'react'
import { FaPlay, FaPause, FaForward, FaBackward, FaStop } from 'react-icons/fa'

// !VA Lift up the click event handlers to the Slideshow3 parent component. Receive activeIndex, the index flags that indicate last/first index in the array, the play POS and the slideslength ref for the status control.
//prettier-ignore
function Slideshow3Controls({
  prevSlide,
  nextSlide,
  playSlideshow,
  pauseSlideshow,
  resetSlideshow,
  activeIndex,
  lastIndexFlag,
  firstIndexFlag,
  play,
  slideslength
}) {

  // !VA Conditional styles for disabling Prev and Next controls when the last/first index is reached.
  const styles = {
    disableNext: {
      pointerEvents: lastIndexFlag  ? 'none' : 'auto', 
      color: lastIndexFlag ? 'gray' : null,
    },
    disablePrev: {
      pointerEvents: firstIndexFlag  ? 'none' : 'auto', 
      color: firstIndexFlag ? 'gray' : null,
    }
  };


  return (
    <div className='slideshow3-controls'>
      {/* Show the controls only if a slide is displayed, i.e. not when the base image is displayed. activeIndex has to be greater than 0  */}
      <p className="slideshow3-status">
        { activeIndex  >= 0 &&   `${activeIndex + 1} of ${slideslength.current + 1}`   }
      </p>
      <span 
        className='prev' 
        onClick={prevSlide}
        style={styles.disablePrev}
        >
        <FaBackward />
      </span>
      <span 
        className='next' 
        onClick={nextSlide}
        style={styles.disableNext}
        >
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
