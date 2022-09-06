import React from 'react'

//prettier-ignore
function Slideshow3Content({ activeIndex, slides, baseslide, play }) {
// !VA This component the activeIndex, the array of slides to display, the static base slide that lives under the slideshow display and the play POS with either 'playing' or 'paused'
// !VA Using a local const here instead of passing in the slideslength ref because we already have the slides array in the component
  // const len = slides.length;
  // !VA Conditionally applied styles for setting zIndex of baseslide and the slideshow images. If the slideshow is in progress, i.e. playing or paused, then show the slideshow over the baseslide, otherwise move the slideshow behind the baseslide. If the slideshow is being paged with the paging buttons move it above the baseslide
  const styles = {
    playingpaused: {
      zIndex: play === 'playing' || play === 'paused' ? 2 : -1,
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

export default Slideshow3Content
