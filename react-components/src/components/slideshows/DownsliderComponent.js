// !VA This downslider includes the caption below the images.

import { useState } from 'react'
import { Downslider, DownsliderItem } from './Downslider'
import './Downslider.css'
import Navbar from '../Navbar'
import { FaCaretDown } from 'react-icons/fa'

import imagedata from '../../data/DeltaBluesAlbumImages.json'

// !VA https://dev.to/anxiny/create-a-Downslider-with-react-1pb1
// !VA In a real project, the image data for the respective Downslider would be passed in from the parent component in which DownsliderComponent is first called as the imagedata prop, see the About page in the crossandhigh.com. Here, imagedata is imported directly from the json data file.
// export default function DownsliderComponent( {imagedata}) {
//prettier-ignore
export default function DownsliderComponent() {

  // !VA Extract the images array from the imagedata object.
  const { images } = imagedata

  const [ autoplay, setAutoplay ] = useState( false )

  const handleClick = () => {
    console.log('handleClick running');
    setAutoplay(!autoplay)
  }
  




  return (
    <>
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
        <div className="downslider-down-button-container">
          <p 
            className="downslider-down-button-text"
            onClick={handleClick}
            >Who's Covered<br /> This Song?</p>
          <div 
            className="downslider-down-button"></div>
        </div>
      </div>
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
