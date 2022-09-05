import React from 'react'

//prettier-ignore
function Slideshow3Dots({ activeIndex, onclick, slides }) {

  return (
    <div className='all-dots'>
      {slides.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? 'dot active-dot' : 'dot'}`}
          onClick={() => onclick(index)}></span>
      ))}
    </div>
  )
}

export default Slideshow3Dots
