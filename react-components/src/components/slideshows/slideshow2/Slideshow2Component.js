// !VA This slideshow2 includes the caption below the images.

// import { useState, useEffect } from 'react'
import { Slideshow2, Slideshow2Item } from './Slideshow2'
import './Slideshow2.css'
import Navbar from '../../Navbar'

import imagedata from '../../../data/ChicagoAlbumImageData.json'

// !VA https://dev.to/anxiny/create-a-Slideshow2-with-react-1pb1
// !VA In a real project, the image data for the respective Slideshow2 would be passed in from the parent component in which Slideshow2Component is first called as the imagedata prop, see the About page in the crossandhigh.com. Here, imagedata is imported directly from the json data file.
// export default function Slideshow2Component( {imagedata}) {
//prettier-ignore
export default function Slideshow2Component() {

  // !VA Extract the images array from the imagedata object.
  const { images } = imagedata
  // !VA Render the slideshow2 container with the class slideshow2-slide, map over the images array and render Slideshow2Items for each image. Slideshow2 and Slideshow2Item components are both in the Slideshow2.js file.
  // !VA The captions are rendered in a separate Slideshow2 component with the class 'slideshow2-caption'. Having a different class allows you to target the captions and render  them outside the slideshow22-slide container, which has overflow: hidden. In the original slideshow2, overflow: hidden was applied to the slideshow2-container div, which mean any caption displayed outside the container and thus did not display.
  return (
    <>
      <div className='basis-3/4 flex-column flex-center'> 
        <Slideshow2 classname='slideshow2-image-container' width={100} height={100}>
          {
            images.map((image, i) => {
              return (
                <Slideshow2Item key={image.url} >
                  <Slideshow2Image alt={image.caption} img={image.url}/>
                </Slideshow2Item>
              )
            })
          }
        </Slideshow2>
        <Slideshow2 classname='slideshow2-caption-container' width={100} height={100}>
          {
            images.map((image, i) => {
              return (
                <Slideshow2Item key={image.url} >
                  <Slideshow2Caption alt={image.caption} img={image.url}/>
                </Slideshow2Item>
              )
            })
          }
        </Slideshow2>
      </div>
      <Navbar />
    </>
  )
}
// !VA Destructure out the img property source from the img props object
//prettier-ignore
function Slideshow2Image( {img, alt} ) {

  return (
        <img className='slideshow2-image' src={img} alt={alt}></img>
    )
}

//prettier-ignore
function Slideshow2Caption( {img, alt} ) {
  return (
    <div className='slideshow2-caption'>
      <p className='slideshow2-caption-text'>{alt}</p>
    </div>
    )
}
