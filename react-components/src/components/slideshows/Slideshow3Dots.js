import React from 'react'

//prettier-ignore
function Slideshow3Dots({ activeIndex, onclick, images }) {

  return (
    <div className='all-dots'>
      {images.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? 'dot active-dot' : 'dot'}`}
          onClick={() => onclick(index)}></span>
      ))}
    </div>
  )
}

export default Slideshow3Dots
