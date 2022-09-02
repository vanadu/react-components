// !VA Slideshow2Component and Slideshow2 will: 1) Slide the container up from the top instead of the right 2) Slide 2 images at a time, whereby the second image in the slide action will always be the same: an arrow indicating a dependency. The purpose is to have the composer of a song at the beginning and all the people who recorded it in the subsequent slides. It also should have a start button.

// import { useState, useEffect } from 'react'
import { Slideshow, SlideshowItem } from './Slideshow'
import './Slideshow.css'
import Navbar from '../Navbar'

import imagedata from '../../data/ChicagoAlbumImageData.json'

// !VA https://dev.to/anxiny/create-a-slideshow-with-react-1pb1
// !VA In a real project, the image data for the respective slideshow would be passed in from the parent component in which SlideshowComponent is first called as the imagedata prop, see the About page in the crossandhigh.com. Here, imagedata is imported directly from the json data file.
// export default function SlideshowComponent( {imagedata}) {
//prettier-ignore
export default function SlideshowComponent() {

  // !VA Extract the images array from the imagedata object.
  const { images } = imagedata
  // !VA Render the Slideshow container component, map over the images array and render SlideshowItems for each image. Slideshow and SlideshowItem components are both in the Slideshow.js file.
  return (
    <>
      <div className='basis-3/4 flex-column flex-center'> 
        <Slideshow width={100} height={100}>
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
      </div>
      <Navbar />
    </>
  )
}
// !VA Destructure out the img property source from the img props object
//prettier-ignore
function SlideshowImage( {img, alt} ) {

  // !VA Use useAsync from ax-react-lib to get images from an API - or better yet, use axios because ax-react-lib doesn't support React 18
  // useAsync(async () => {
  //   const data = await fetch(
  //     `https://jsonplaceholder.typicode.com/photos/${Math.round(
  //       Math.random() * 500
  //     )}`
  //   ).then((response) => response.json())
  //   setData(data)
  // })
  
  return (
        <img src={img} alt={alt}></img>
    )
}
