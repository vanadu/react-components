import React, { useEffect, useState } from 'react'
import Slideshow3Content from './Slideshow3Content'
import Slideshow3Dots from './Slideshow3Dots'
import Slideshow3Controls from './Slideshow3Controls'
import imagedata from '../../data/Slideshow3Images'
import './Slideshow3.css'
import Navbar from '../../components/Navbar'
import { FaPlay, FaPause, FaForward, FaBackward, FaStop } from 'react-icons/fa'

// !VA Destructure images array from imagedata json object
const { images } = imagedata
// !VA Get the length of the image array
const len = images.length - 1

//prettier-ignore
function Slideshow3(props) {
  // !VA Initialize a POS for the active index, which will be used for all actions, i.e. timer and pager
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [activeIndex])

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
          />


        {/* <div 
          className="slideshow3-controls-previous slideshow3-controls"

          >
          <div className="slideshow3-controls-label">
            <p>Previous</p>
          </div>
          <div className='slideshow3-controls-icon'>
            <FaBackward />
          </div>          
        </div>

        <div 
          className="slideshow3-controls-next slideshow3-controls"

          >
          <div className="slideshow3-controls-label">
            <p>Next</p>
          </div>
          <div className='slideshow3-controls-icon'>
            <FaForward />
          </div>          
        </div> */}


        
      </div>
      </div>
      <Navbar />
    </>
  )
}

export default Slideshow3
