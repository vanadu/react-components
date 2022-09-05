import React from 'react'
import { useState, useEffect } from 'react'

//prettier-ignore
function Downslider2Content({ activeIndex, slides, baseslide, play }) {

  const len = slides.length;

  const styles = {
    playingpaused: {
      zIndex: play === 'playing' || play === 'paused' ? 2 : -1,
    },
    prevnext: {
      zIndex: 2
    }
  };
  
  return (
    <>
      {/* Loop through images, if the index = activeIndex POS then apply 'slides' and 'active', otherwise apply 'inactive'. 'slides' just applies position: relative and sets the width/height to the CSS variables.  */}
      <div className="slideshow3-slides">
        
        <div className="slideshow3-base-slide">
          <div className="slideshow3-slide-image">
            <img className='slideshow3-slide-image' src={baseslide.urls} alt='' />
          </div>
          <div className="slideshow3-slide-text">
            <h2 className='slideshow3-slide-title'>{baseslide.title}</h2>
            <h3 className='slideshow3-slide-description'>{baseslide.description}</h3>
          </div>
        </div>


        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slideshow3-slide bringforward ${index === activeIndex ? 'active' : 'inactive'}`}
            // style={ play ? { zIndex: 1 } : { zIndex: -1 }
            style={styles.playingpaused}
            style={styles.prevnext}
            >
            <div className="slideshow3-slide-image">
              <img className='slideshow3-slide-image' src={slide.urls} alt='' />
            </div>
            <div className="slideshow3-slide-text">
              <h2 className='slideshow3-slide-title'>{slide.title}</h2>
              <h3 className='slideshow3-slide-description'>{slide.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Downslider2Content
