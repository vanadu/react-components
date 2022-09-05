/* !VA  
  TODO: Get the slider to slide in from top and add a button to start/stop autoplay. autoplay POS tracks on/off status. autoplay prop passed down from DownsliderItem component
  DONE: Get the first image in the data array to display in the content area.
  DONE: Remove the first image in the data array for the slider - it's now displayed by default when the  liderComponent is mounted.
  DONE: Get the slideshow to start when the Play icon is clicked.
    * Tried conditionally rendering the Downslider1 component when context.play is true, but that just showed/hid it and didn't stop the slideshow and didn't re-display it once it was hidden.
  DONE: Figure out how to stop the first image in the slideshow to descend before play is pushed. It descends even if context.play is false. See the setStage POS - if context.play is false, then no stage POS is set, leaving all the slides in their ready position off-container until a stage POS is set.
  PROBLEM: You cannot set a state in one component while rendering another component. In other words, there are limites to useContext, because you can't set the state across components while they are rendering. 





 */
import { Downslider1Context } from '../../../context/Downslider1Context'
import { useState, useEffect } from 'react'
// import { createContext, useContext, useState } from 'react'
import { Downslider1, Downslider1Item } from './Downslider1'
import './Downslider1.css'
import Navbar from '../../Navbar'
import { FaPlay, FaPause, FaForward, FaBackward, FaStop } from 'react-icons/fa'

import imagedata from '../../../data/DeltaBluesAlbumImages.json'

// !VA https://dev.to/anxiny/create-a-Downslider-with-react-1pb1
// !VA In a real project, the image data for the respective Downslider1 would be passed in from the parent component in which Downslider1Component is first called as the imagedata prop, see the About page in the crossandhigh.com. Here, imagedata is imported directly from the json data file.
// export default function Downslider1Component( {imagedata}) {
//prettier-ignore
export default function Downslider1Component() {

  // const Downslider1Context = createContext()

  // !VA Set the init POS, used to set the active propety on the base image when the component mounts so it will fade in
  const [init, setInit ] = useState(false)
  // !VA Initialize the context object. 
  const [context, setContext] = useState({
    items: [],
    activated: false,
    count: 0,
    play: false,
    stop: false,
    init: true,
    move: null
  })

  // !VA Extract the images array from the imagedata object.
  const { images } = imagedata
  // !VA Get the first image in the data array - this will be displayed by default on render.
  const firstImage = images[0]
  // !VA Remove the first image from the json data array - it's now being displayed by default when the component is loaded. The slideshow starts with the second image.
  const [, ...slideshowimages ] = images

  const handlePlay = () => {
    console.log('handlePlay running');
    let play;
    // !VA SUPER IMPORTANT!!!! Toggle a property within a state object!!!!
    setContext( prevState => ({ ...prevState, play: !prevState.play }) )
    setContext( prevState => ({ ...prevState, count: 0 }) )

  }

  const handleStop = () => {
    console.log('handleStop running');
    setContext( {...context, stop: true } )
    setContext( {...context, play: false})
  }

  const handleNext = () => {
    // console.log('handleNext running');
    setContext( prevState => ({ ...prevState, move: 'next' }) )
    setContext( prevState => ({ ...prevState, play: false }) )
    console.log('context.items.length / 2:>> ' + context.items.length / 2);
    if (context.count < context.items.length /2 ) { 
      // console.log('handleNext context.count :>> ' + context.count);
      setContext( prevState => ({ ...prevState, count: context.count + 1 }) )
    }
  }

  const handlePrevious = () => {
    // console.log('handlePrevious running');
    setContext( prevState => ({ ...prevState, play: false }) )
    setContext( prevState => ({ ...prevState, move: 'previous' }) )
    if (context.count >= 1 ) { 
      // console.log('handlePrevious context.count :>> ' + context.count);
      setContext( prevState => ({ ...prevState, count: context.count - 1 }) )
    }
  }


  useEffect(() => {
    setInit(true)
  }, []);




  // !VA Initialize the slider. 1) Create the Downslider1 component, which creates the context and adds the items to the context.items array, and creates the container div in which the individual slides will be rendered. Loop through the items in the json array and create a Downslider1Item for each. 
  return (
    <>
      <Downslider1Context.Provider value={[context, setContext]}>
        <div className='basis-3/4 flex-column flex-center downslider-box'> 
        {/* The first image in the array is displayed by default on render */}
          <div className={`downslider-image-container downslider-base-image ${init && 'active'}`}>
            <div className="downslider-content">
              <img src={firstImage.url} alt={firstImage.caption}/>
              <div className="downslider-caption">
                <p className="downslider-caption-text">
                  {firstImage.caption}
                </p>
              </div>
            </div>
          </div>
          <Downslider1 width={100} height={100}>
            {/* Run the slideshow starting from the second image in the data array */}
            {
              slideshowimages.map((image, i) => {
                return (
                  <Downslider1Item key={image.url} >
                    <Downslider1Image alt={image.caption} img={image.url}/>
                    <Downslider1Caption alt={image.caption} img={image.url}/>
                  </Downslider1Item>
                )
              })
            }
          </Downslider1>
          <div className="downslider-controls-container">
            {!context.play && (
              <div 
                className="downslider-controls-play downslider-controls"
                onClick={handlePlay}
                >
                <div className="downslider-controls-label">
                  <p>Play</p>
                </div>
                <div className="downslider-controls-icon">
                  <FaPlay />
                </div>
              </div>
            )
            }
            {context.play && (
              <div 
                className="downslider-controls-pause downslider-controls"
                onClick={handlePlay}
                >
                <div className="downslider-controls-label">
                  <p>Pause</p>
                </div>
                <div className="downslider-controls-icon">
                  <FaPause />
                </div>
              </div>
            )
            }


            <div 
              className="downslider-controls-previous downslider-controls"
              onClick={handlePrevious}
              >
              <div className="downslider-controls-label">
                <p>Previous</p>
              </div>
              <div className='downslider-controls-icon'>
                <FaBackward />
              </div>          
            </div>

            <div 
              className="downslider-controls-next downslider-controls"
              onClick={handleNext}
              >
              <div className="downslider-controls-label">
                <p>Next</p>
              </div>
              <div className='downslider-controls-icon'>
                <FaForward />
              </div>          
            </div>




            <div className="downslider-controls-next downslider-controls">
              <div className="downslider-controls-label">
                <p>Reset</p>
              </div>
              <div className='downslider-controls-icon'>
                <FaStop />
              </div>          
            </div>






          </div>
      </div>
      </Downslider1Context.Provider>
      <Navbar />
    </>
  )
}
// !VA Destructure out the img property source from the img props object
//prettier-ignore
function Downslider1Image( {img, alt} ) {

  return (
        <img className='downslider-image' src={img} alt={alt}></img>
    )
}

//prettier-ignore
function Downslider1Caption( {img, alt} ) {
  return (
    <div className='downslider-caption'>
      <p className='downslider-caption-text'>{alt}</p>
    </div>
    )
}
