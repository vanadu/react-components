import React from 'react'

//prettier-ignore
function Downslider2Content({ activeIndex, slides, baseslide, play }) {
// !VA This component the activeIndex, the array of slides to display, the static base slide that lives under the slideshow display and the play POS with either 'playing' or 'paused'
// !VA Using a local const here instead of passing in the slideslength ref because we already have the slides array in the component
  // const len = slides.length;
  // !VA Conditionally applied styles for setting zIndex of baseslide and the slideshow images. If the slideshow is in progress, i.e. playing or paused, then show the slideshow over the baseslide, otherwise move the slideshow behind the baseslide. If the slideshow is being paged with the paging buttons move it above the baseslide
  const styles = {
    playingpaused: {
      zIndex: play === 'playing' || play === 'paused' ? 2 : -1,
    },
    slidesshow: {
      zIndex: activeIndex > -1 ? 2 : -1
    }
  };
  
  return (
    <>
      {/* Loop through images, if the index = activeIndex POS then apply 'slides' and 'active', otherwise apply 'inactive'. 'slides' just applies position: relative and sets the width/height to the CSS variables.  */}
      <div className="downslider2-slides">
        
        <div className="downslider2-base-slide">
          <div className="downslider2-slide-image">
            <img className='downslider2-slide-image' src={baseslide.urls} alt='' />
          </div>
          <div className="downslider2-slide-text">
            <h2 className='downslider2-slide-title'>{baseslide.title}</h2>
            <h3 className='downslider2-slide-description'>{baseslide.description}</h3>
          </div>
        </div>

        {/* Conditionally apply z-index when  */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`downslider2-slide ${index === activeIndex ? 'active' : 'inactive'}  ${activeIndex > -1 ? 'downslider1-slide-show' : ''}`}
            // style={styles.slidesshow}
            >
            <div className="downslider2-slide-image">
              <img className='downslider2-slide-image' src={slide.urls} alt='' />
            </div>
            <div className="downslider2-slide-text">
              <h2 className='downslider2-slide-title'>{slide.title}</h2>
              <h3 className='downslider2-slide-description'>{slide.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Downslider2Content
