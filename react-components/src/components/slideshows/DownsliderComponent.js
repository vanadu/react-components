/* !VA  
  TODO: Get the slider to slide in from top and add a button to start/stop autoplay. autoplay POS tracks on/off status. autoplay prop passed down from DownsliderItem component
  DONE: Get the first image in the data array to display in the content area.
  DONE: Remove the first image in the data array for the slider - it's now displayed by default when the DownsliderComponent is mounted.
  DONE: Get the slideshow to start when the Play icon is clicked.
    * Tried conditionally rendering the Downslider component when context.play is true, but that just showed/hid it and didn't stop the slideshow and didn't re-display it once it was hidden.
  DONE: Figure out how to stop the first image in the slideshow to descend before play is pushed. It descends even if context.play is false. See the setStage POS - if context.play is false, then no stage POS is set, leaving all the slides in their ready position off-container until a stage POS is set.





 */
import { DownsliderContext } from '../../context/DownsliderContext'
import { useState, useEffect } from 'react'
// import { createContext, useContext, useState } from 'react'
import { Downslider, DownsliderItem } from './Downslider'
import './Downslider.css'
import Navbar from '../Navbar'
import { FaPlay, FaPause, FaStop } from 'react-icons/fa'

import imagedata from '../../data/DeltaBluesAlbumImages.json'

// !VA https://dev.to/anxiny/create-a-Downslider-with-react-1pb1
// !VA In a real project, the image data for the respective Downslider would be passed in from the parent component in which DownsliderComponent is first called as the imagedata prop, see the About page in the crossandhigh.com. Here, imagedata is imported directly from the json data file.
// export default function DownsliderComponent( {imagedata}) {
//prettier-ignore
export default function DownsliderComponent() {

  // const DownsliderContext = createContext()

  // !VA Set the init POS, used to set the active propety on the base image when the component mounts so it will fade in
  const [init, setInit ] = useState(false)
  // !VA Initialize the context object. 
  const [context, setContext] = useState({
    items: [],
    activated: false,
    current: 1,
    play: false,
    stop: false,
    init: true
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

  }

  const handleStop = () => {
    console.log('handleStop running');
    setContext( {...context, play: false, stop: true } )
  }


  useEffect(() => {
    setInit(true)
  }, []);



  // !VA Initialize the slider. 1) Create the Downslider component, which creates the context and adds the items to the context.items array, and creates the container div in which the individual slides will be rendered. Loop through the items in the json array and create a DownsliderItem for each. 
  return (
    <>
      <DownsliderContext.Provider value={[context, setContext]}>
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
          <Downslider width={100} height={100}>
            {/* Run the slideshow starting from the second image in the data array */}
            {
              slideshowimages.map((image, i) => {
                return (
                  <DownsliderItem key={image.url} >
                    <DownsliderImage alt={image.caption} img={image.url}/>
                    <DownsliderCaption alt={image.caption} img={image.url}/>
                  </DownsliderItem>
                )
              })
            }
          </Downslider>
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
            <div className="downslider-controls-stop downslider-controls">
              <div className="downslider-controls-label">
                <p>Reset</p>
              </div>
              <div className='downslider-controls-icon'>
                <FaStop />
              </div>          
            </div>
          </div>
      </div>
      </DownsliderContext.Provider>
      <Navbar />
    </>
  )
}
// !VA Destructure out the img property source from the img props object
//prettier-ignore
function DownsliderImage( {img, alt} ) {

  return (
        <img className='downslider-image' src={img} alt={alt}></img>
    )
}

//prettier-ignore
function DownsliderCaption( {img, alt} ) {
  return (
    <div className='downslider-caption'>
      <p className='downslider-caption-text'>{alt}</p>
    </div>
    )
}
