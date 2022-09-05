import React, { useEffect, useState } from 'react'
import Slideshow3Content from './Slideshow3Content'
import Slideshow3Dots from './Slideshow3Dots'
import Slideshow3Controls from './Slideshow3Controls'
import imagedata from '../../../data/Slideshow3Images'
import './Slideshow3.css'
import Navbar from '../../../components/Navbar'

//prettier-ignore
function Slideshow3(props) {

  // !VA Destructure images array from imagedata json object
  const { images } = imagedata
  // !VA baseslide is static slide that lives at the bottom of the slide stack, it is not a slideshow slide. The slideshow slides move/fade over it.
  const baseslide = images[0]
  // !VA Remove the first image from the json data array - it's now being displayed by default when the component is loaded. The slideshow starts with the second image.
  const [, ...slides ] = images


  // !VA Get the length of the image array
  const len = slides.length - 1
  // !VA Initialize a POS for the active index, which will be used for all actions, i.e. timer and pager
  const [activeIndex, setActiveIndex] = useState(0)
  // !VA Initialize POS to track play/pause state: paused: false, playing: true
  const [ play, setPlay  ] = useState(null)


  const prevSlide= () => {
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
  }
  
  const nextSlide = () => {
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
  }
  
  const playSlideshow= () => {
    setPlay('playing')
  }
  
  const pauseSlideshow = () => {
    setPlay('paused')
  }
  
  const resetSlideshow = () => {
    setActiveIndex(0)
    setPlay(null)
  }


  // !VA Autoplay slideshow
  useEffect(() => {
    // !VA Variable for setInterval
    let interval
    console.log('setInterval play :>> ' + play);
    // !VA If the play POS is true, run the slideshow, otherwise pause
    if (play === 'playing') {
      interval = setInterval(() => {
        // !VA If activeIndex = length of the image array, then it's reached the last image in the slideshow, so reset activeIndex to 0, otherwise increment activeIndex to advance 
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
      }, 2000)
    }
    // !VA clear the setInterval object
    return () => clearInterval(interval)
    // !VA set the dependencies of the useEffect: activeIndex and play are the POSs that change in the sideeffect
  }, [activeIndex, play])

  console.log('activeIndex :>> ');
  console.log(activeIndex);

  return (
    <>
      <div className='basis-3/4 flex-column flex-center'> 
        <div className='slideshow3-container'>
          <Slideshow3Content
            activeIndex={activeIndex}
            slides={slides}
            baseslide={baseslide}
            play={play}
          />

          <Slideshow3Dots
            activeIndex={activeIndex}
            slides={slides}
            onClick={(activeIndex) => setActiveIndex(activeIndex)}
          />
        </div>
        <div className="slideshow3-controls-container">

        {/* Receive the click handlers from and pass the play POS to the child Slideshow3Component */}
        <Slideshow3Controls
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          playSlideshow={playSlideshow }
          pauseSlideshow={pauseSlideshow}
          resetSlideshow={resetSlideshow}
          play={play}                  
        />


        </div>
      </div>
      <Navbar />
    </>
  )
}

export default Slideshow3
