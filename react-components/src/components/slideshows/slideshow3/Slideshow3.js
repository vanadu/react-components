import React, { useEffect, useState, useRef } from 'react'
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
  // !VA Remove the first image from the json data array - it's now being displayed by default as baseslide, i.e. the static image that lives under the slideshow and displays when the component is loaded. The slideshow starts with the second image.
  const [, ...slides ] = images
  // !VA Initialize a POS for the active index, which will be used for all actions, i.e. timer and pager. It is initialized at -1 so that the first slide in the array will display when the Next pager button is pressed.
  const [activeIndex, setActiveIndex] = useState(-1)
  // !VA Initialize POS to track play/pause state: init: null, paused: paused, playing: playing
  const [ play, setPlay  ] = useState(null)
  // !VA Boolean POS flag to track if the current index is the last index before the activeIndex POS is reset to 0
  const [ lastIndexFlag, setLastIndexFlag ] = useState(false)
  // !VA Boolean POS flag to track if the current index is the first index, i.e. 0
  const [ firstIndexFlag, setFirstIndexFlag ] = useState(false)
  // !VA Get the length of the image array to a ref. Use a ref so you can pass it to Downslider2Controls to use in the status control. 
  const slideslength = useRef(null);
  // !VA Set the ref to the slides.length + 1 to compensate for 0-based.
  slideslength.current = slides.length - 1

  const prevSlide= () => {
    // !VA First set lastIndexFlag to false since activeIndex is being incremented here.
    setLastIndexFlag(false)
    // !VA Decrement until the first index is reached, then set a flag POS to indicate the first position has been reached. You can use this to disable the Prev button.
    if (activeIndex >= 0  ) {
      console.log('decrementing...');
      setActiveIndex( activeIndex -1 )
      activeIndex === 0 && setFirstIndexFlag(true)
    } 
  }
  
  const nextSlide = () => {
    // !VA First set firstIndexFlag to false since activeIndex is being incremented here.
    setFirstIndexFlag(false)
    // !VA Compensate for activeIndex initializing at -1. If activeIndex = slides.length, then increment activeIndex, and once activeIndex reached slides.length set the POS, which is then passed to Slideshow3Controls as prop and used to disable the Next button.
    if (activeIndex + 1 <= slideslength.current  ) {
      // console.log('incrementing...');
      setActiveIndex( activeIndex + 1)
      activeIndex + 1 === slideslength.current && setLastIndexFlag(true)
    } 
  }
  
  const playSlideshow= () => {
    setPlay('playing')
  }
  
  const pauseSlideshow = () => {
    setPlay('paused')
  }
  
  const resetSlideshow = () => {
    setActiveIndex(-1)
    setPlay(null)
  }


  // !VA Autoplay slideshow
  useEffect(() => {
    // !VA Variable for setInterval
    let interval
    // console.log('setInterval play :>> ' + play);
    // !VA If the play POS is true, run the slideshow, otherwise pause
    if (play === 'playing') {
      interval = setInterval(() => {
        // !VA If activeIndex = length of the image array, then it's reached the last image in the slideshow, so reset activeIndex to 0, otherwise increment activeIndex to advance 
        setActiveIndex(activeIndex === slideslength.current ? 0 : activeIndex + 1)
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
            lastIndexFlag={lastIndexFlag}
            firstIndexFlag={firstIndexFlag}
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
          slidesLength={slideslength.current}
          activeIndex={activeIndex}
          lastIndexFlag={lastIndexFlag}
          firstIndexFlag={firstIndexFlag}
          play={play}
          slideslength={slideslength}
        />


        </div>
      </div>
      <Navbar />
    </>
  )
}

export default Slideshow3
