/* !VA  
  DONE: Get the slider to slide in from top and add a button to start/stop autoplay. autoplay POS tracks on/off status. autoplay prop passed down from DownsliderItem component
  TODO: Set the slide to start on and display it when the component is first rendered. 





 */
import { DownsliderContext } from '../../context/DownsliderContext'
import { useState } from 'react'
// import { createContext, useContext, useState } from 'react'
import { Downslider, DownsliderItem } from './Downslider'
import './Downslider.css'
import Navbar from '../Navbar'
import { FaCaretDown, FaPlay, FaStop } from 'react-icons/fa'

import imagedata from '../../data/DeltaBluesAlbumImages.json'

// !VA https://dev.to/anxiny/create-a-Downslider-with-react-1pb1
// !VA In a real project, the image data for the respective Downslider would be passed in from the parent component in which DownsliderComponent is first called as the imagedata prop, see the About page in the crossandhigh.com. Here, imagedata is imported directly from the json data file.
// export default function DownsliderComponent( {imagedata}) {
//prettier-ignore
export default function DownsliderComponent() {

  // const DownsliderContext = createContext()
    const [context, setContext] = useState({
    items: [],
    activated: false,
    count: 0,
    play: false,
    stop: false
  })



  // !VA Extract the images array from the imagedata object.
  const { images } = imagedata

  const [ autoplay, setAutoplay ] = useState( false )
  const [ currentSlide, setCurrentSlide ] = useState()

  const handlePlay = () => {
    console.log('handlePlay running');
    // setAutoplay(!autoplay)
    setContext( {...context, play: true, stop: false } )
  }

  const handleStop = () => {
    console.log('handleStop running');

    setContext( {...context, play: false, stop: true } )
  }


  // console.log('context :>> ');
  // console.log(context);
  

  // !VA Initialize the slider. 1) Create the Downslider component, which creates the context and adds the items to the context.items array, and creates the container div in which the individual slides will be rendered. Loop through the items in the json array and create a DownsliderItem for each. 
  return (
    <>
      <DownsliderContext.Provider value={[context, setContext]}>
        <div className='basis-3/4 flex-column flex-center downslider-box'> 
          <Downslider width={100} height={100}>
            {
              images.map((image, i) => {
                return (
                  <DownsliderItem autoplay={autoplay}  key={image.url} >
                    <DownsliderImage alt={image.caption} img={image.url}/>
                    <DownsliderCaption alt={image.caption} img={image.url}/>
                  </DownsliderItem>
                )
              })
            }
          </Downslider>
          <div className="downslider-controls-container">
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
            <div className="downslider-controls-stop downslider-controls">
              <div className="downslider-controls-label">
                <p>Stop</p>
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
