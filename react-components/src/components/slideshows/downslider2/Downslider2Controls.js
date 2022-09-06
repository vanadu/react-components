import React from 'react'
import { FaPlay, FaPause, FaForward, FaBackward, FaStop } from 'react-icons/fa'

// !VA Lift up the click event handlers to the Downslider2 parent component. Receive activeIndex, the index flags that indicate last/first index in the array, the play POS and the slideslength ref for the status control.
//prettier-ignore
function Downslider2Controls({
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

  // !VA Conditional styles for disabling Prev and Next controls when the last/first index is reached. This was refactored to use conditional styles, see JSX
  // const styles = {
  //   disableNext: {
  //     pointerEvents: lastIndexFlag  ? 'none' : 'auto', 
  //     color: lastIndexFlag ? 'gray' : null,
  //   },
  //   disablePrev: {
  //     pointerEvents: firstIndexFlag  ? 'none' : 'auto', 
  //     color: firstIndexFlag ? 'gray' : null,
  //   }
  // };


  return (
    <div className='downslider2-controls'>
      {/* Show the controls only if a slide is displayed, i.e. not when the base image is displayed. activeIndex has to be greater than 0  */}
      <p className="downslider2-status">
        { activeIndex  >= 0 &&   `${activeIndex + 1} of ${slideslength.current + 1}`   }
      </p>

          <span 
            className={`downslider2-control downslider2-control-prev ${play === 'playing' ? 'downslider2-control-disable' : ''} ${firstIndexFlag ? 'downslider2-control-disable' : ''}`} 
            onClick={prevSlide}
            // style={styles.disablePrev}
            >
            <FaBackward />
          </span>
          <span 
            className={`downslider2-control downslider2-control-next ${play === 'playing' ? 'downslider2-control-disable' : ''} ${lastIndexFlag ? 'downslider2-control-disable' : ''}`} 
            onClick={nextSlide}
            // style={styles.disableNext}
            >
            <FaForward />
          </span>




      {/* Toggle display of Play/Pause control based on the play POS. */}
      { play === 'playing'  && (
        <>
          <span className='downslider2-control downslider2-control-pause' onClick={pauseSlideshow}>
            <FaPause />
          </span>
        </>
        )
      }
      {/* NOTE: Don't forget to enclose multiple conditions in parentheses */}
      { (play === 'paused' || play === null) && (
        <>
          <span className='downslider2-control downslider2-control-play' onClick={playSlideshow}>
            <FaPlay />
          </span>
        </>
        )
      }
      <span className='downslider2-control downslider2-control-reset' onClick={resetSlideshow}>
        <FaStop />
      </span>
    </div>
  )
}

export default Downslider2Controls
