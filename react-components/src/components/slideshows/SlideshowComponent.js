// !VA This slideshow includes the caption below the images.

// import { useState, useEffect } from 'react'
import { Slideshow, SlideshowItem } from './Slideshow'
import './Slideshow.css'
import Navbar from '../Navbar'

import imagedata from '../../data/ChicagoAlbumImageData.json'

// !VA https://dev.to/anxiny/create-a-Slideshow-with-react-1pb1
// !VA In a real project, the image data for the respective Slideshow would be passed in from the parent component in which SlideshowComponent is first called as the imagedata prop, see the About page in the crossandhigh.com. Here, imagedata is imported directly from the json data file.
// export default function SlideshowComponent( {imagedata}) {
//prettier-ignore
export default function SlideshowComponent() {

  // !VA Extract the images array from the imagedata object.
  const { images } = imagedata
  // !VA Render the slideshow container with the class slideshow-slide, map over the images array and render SlideshowItems for each image. Slideshow and SlideshowItem components are both in the Slideshow.js file.
  // !VA The captions are rendered in a separate Slideshow component with the class 'slideshow-caption'. Having a different class allows you to target the captions and render  them outside the slideshow-slide container, which has overflow: hidden. In the original slideshow, overflow: hidden was applied to the slideshow-container div, which mean any caption displayed outside the container and thus did not display.
  return (
    <>
      <div className='basis-3/4 flex-column flex-center'> 
        <Slideshow classname='slideshow-image-container' width={100} height={100}>
          {
            images.map((image, i) => {
              return (
                <SlideshowItem key={image.url} >
                  <SlideshowImage alt={image.caption} img={image.url}/>
                </SlideshowItem>
              )
            })
          }
        </Slideshow>
        <Slideshow classname='slideshow-caption-container' width={100} height={100}>
          {
            images.map((image, i) => {
              return (
                <SlideshowItem key={image.url} >
                  <SlideshowCaption alt={image.caption} img={image.url}/>
                </SlideshowItem>
              )
            })
          }
        </Slideshow>
      </div>
      <Navbar />
    </>
  )
}
// !VA Destructure out the img property source from the img props object
//prettier-ignore
function SlideshowImage( {img, alt} ) {

  return (
        <img className='slideshow-image' src={img} alt={alt}></img>
    )
}

//prettier-ignore
function SlideshowCaption( {img, alt} ) {
  return (
    <div className='slideshow-caption'>
      <p className='slideshow-caption-text'>{alt}</p>
    </div>
    )
}
