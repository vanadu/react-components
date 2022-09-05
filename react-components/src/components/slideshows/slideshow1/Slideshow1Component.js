// !VA This slideshow includes the caption below the images.

// import { useState, useEffect } from 'react'
import { Slideshow1, Slideshow1Item } from './Slideshow1'
import './Slideshow1.css'
import Navbar from '../../Navbar'

import imagedata from '../../../data/ChicagoAlbumImageData.json'

// !VA https://dev.to/anxiny/create-a-Slideshow1-with-react-1pb1
// !VA In a real project, the image data for the respective Slideshow1 would be passed in from the parent component in which Slideshow1Component is first called as the imagedata prop, see the About page in the crossandhigh.com. Here, imagedata is imported directly from the json data file.
// export default function Slideshow1Component( {imagedata}) {
//prettier-ignore
export default function Slideshow1Component() {

  // !VA Extract the images array from the imagedata object.
  const { images } = imagedata
  // !VA Render the slideshow container with the class slideshow-slide, map over the images array and render Slideshow1Items for each image. Slideshow1 and Slideshow1Item components are both in the Slideshow1.js file.
  // !VA The captions are rendered in a separate Slideshow1 component with the class 'slideshow-caption'. Having a different class allows you to target the captions and render  them outside the slideshow-slide container, which has overflow: hidden. In the original slideshow, overflow: hidden was applied to the slideshow-container div, which mean any caption displayed outside the container and thus did not display.
  return (
    <>
      <div className='basis-3/4 flex-column flex-center'> 
        <Slideshow1 classname='slideshow-image-container' width={100} height={100}>
          {
            images.map((image, i) => {
              return (
                <Slideshow1Item key={image.url} >
                  <Slideshow1Image alt={image.caption} img={image.url}/>
                </Slideshow1Item>
              )
            })
          }
        </Slideshow1>
        <Slideshow1 classname='slideshow-caption-container' width={100} height={100}>
          {
            images.map((image, i) => {
              return (
                <Slideshow1Item key={image.url} >
                  <Slideshow1Caption alt={image.caption} img={image.url}/>
                </Slideshow1Item>
              )
            })
          }
        </Slideshow1>
      </div>
      <Navbar />
    </>
  )
}
// !VA Destructure out the img property source from the img props object
//prettier-ignore
function Slideshow1Image( {img, alt} ) {

  return (
        <img className='slideshow-image' src={img} alt={alt}></img>
    )
}

//prettier-ignore
function Slideshow1Caption( {img, alt} ) {
  return (
    <div className='slideshow-caption'>
      <p className='slideshow-caption-text'>{alt}</p>
    </div>
    )
}
