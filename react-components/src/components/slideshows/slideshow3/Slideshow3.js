import React, { useEffect, useState } from 'react'
import Slideshow3Content from './Slideshow3Content'
import Slideshow3Dots from './Slideshow3Dots'
import Slideshow3Controls from './Slideshow3Controls'
import imagedata from '../../../data/Slideshow3Images'
import './Slideshow3.css'
import Navbar from '../../../components/Navbar'
import { FaPlay, FaPause, FaForward, FaBackward, FaStop } from 'react-icons/fa'

// !VA Destructure images array from imagedata json object
const { images } = imagedata
// !VA Get the length of the image array
const len = images.length - 1

//prettier-ignore
function Slideshow3(props) {
  // !VA Initialize a POS for the active index, which will be used for all actions, i.e. timer and pager
  const [activeIndex, setActiveIndex] = useState(0)
  const [ play, setPlay  ] = useState(false)

  useEffect(() => {
    let interval
    console.log('play :>> ' + play);
    if (play) {
      interval = setInterval(() => {
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
      }, 2000)
    }


    return () => clearInterval(interval)
  }, [activeIndex, play])

  console.log('activeIndex :>> ');
  console.log(activeIndex);

  return (
    <>
      <div className='basis-3/4 flex-column flex-center'> 
        <div className='slider-container'>
          <Slideshow3Content
            activeIndex={activeIndex}
            images={images}
          />

          <Slideshow3Dots
            activeIndex={activeIndex}
            images={images}
            onClick={(activeIndex) => setActiveIndex(activeIndex)}
          />
        </div>
        <div className="slideshow3-controls-container">


          <Slideshow3Controls
            prevSlide={() =>
              setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
            }
            nextSlide={() =>
              setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
            }
            playSlideshow={() => {
              // setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
               setPlay(true)
              }
            }
            pauseSlideshow={() => {
              // setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
              setPlay(false)
              }
            }
            resetSlideshow={() => {
              setActiveIndex(0)
              setPlay(false)
              }
            }                        
          />


        </div>
      </div>
      <Navbar />
    </>
  )
}

export default Slideshow3
