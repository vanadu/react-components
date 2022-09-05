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
  activeIndex,
  lastIndexFlag,
  firstIndexFlag,
  play,
}) {
  
  console.log('lastIndexFlag :>> ' + lastIndexFlag);
  console.log('firstIndexFlag :>> ' + firstIndexFlag);


  const styles = {
    disableNext: {
      pointerEvents: lastIndexFlag  ? 'none' : 'auto', 
      color: lastIndexFlag ? 'none' : null,
      border: lastIndexFlag ? '1px solid green' : null
    },
    disablePrev: {
      pointerEvents: firstIndexFlag  ? 'none' : 'auto', 
      color: firstIndexFlag ? 'none' : null,
      border: firstIndexFlag ? '1px solid green' : null
    }
  };


  // console.log('Controls: activeIndex :>> ' + activeIndex);
  // console.log('lastIndexFlag :>> ' + lastIndexFlag);
  // console.log('lastIndexFlag :>> ' + lastIndexFlag);


  return (
    <div className='slideshow3-controls'>
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
