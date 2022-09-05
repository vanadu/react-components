import React, { useState } from 'react'
import HomeAccordionContent from './HomeAccordionContent'
// !VA https://iwconnect.com/creating-a-fully-functional-accordion-component-with-react-js-and-tailwindcss/
// !VA This uses Tailwind...

//prettier-ignore
const Accordion2 = () => {
  const [activeIndex, setActiveIndex] = useState(2)

  return (
    <>
      <div className='basis-3/4 flex-column flex-center'>
        <h2 className='text-lg font-bold ml-5'>React Components</h2>
        <div className='container p-2 pl-5 pr-5 flex flex-row'>
          <div className='container flex flex-col justify-center items-left'>
            <p>List of React components in this repository</p>

            <HomeAccordionContent
              title='Accordion: Open All'
              index={1}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}>
              Opens all content when clicked, i.e. multiple accordion dropdowns can be opened at one time.
            </HomeAccordionContent>

            <HomeAccordionContent
              title='Accordion: Open One'
              index={2}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}>
              Opens only one content dropdown item at a time. This is what's being used for this page.
            </HomeAccordionContent>

            <HomeAccordionContent
              title='Read More Demo'
              index={3}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}>
              Read More component for text only - not any other elements. Only use this to expand the text in a p or li tag. Specifies the number of characters at which the text is to be truncated/expanded.
            </HomeAccordionContent>

            <HomeAccordionContent
              title='Scroll Into View'
              index={4}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}>
              Scroll to Top and Scroll To Next Page components for moving content around in the viewport.
            </HomeAccordionContent>

            <HomeAccordionContent
              title='Slideshow1'
              index={5}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}>
              <p>
                New slides slide in from the right and cover the previous slide with a transform transition. There's a separate caption section. Data is provided in a JSON file with URLs to staging.crossandhigh.com, which is where the images are served from. Sourced from <a className='font-semibold' href="https://dev.to/anxiny/create-a-slideshow-with-react-1pb1" target="_blank" rel="noreferrer noopener">https://dev.to/anxiny/create-a-slideshow-with-react-1pb1</a>. I spent a lot of time trying to figure out how this works - it has no index per se but cycles through items by assigning them random names with the <span className="font-mono">performance.now</span> property. It's the same slideshow I based Downslider1 on but had to give that up. TO convoluted logic to be adding controls and changing things up too much. There is a lot of good stuff in here though:
              </p>
              <ul>
                <li>
                  <span className="font-bold">IMPORTANT</span>: Uses useContext.
                </li>
              </ul>
              <p>
              </p>
              
            </HomeAccordionContent>

            <HomeAccordionContent
              title='Slideshow2'
              index={6}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}>
              Appears to be the same as Slideshow1...not sure what the difference is. 
            </HomeAccordionContent>

            <HomeAccordionContent
              title='Slideshow3'
              index={7}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}>
              This is a good slideshow but doesn't have anything in the way of fluff or animation. ALL the controls work, there's a status control that says shows the current slide of the total number. This will be the basis for Downslider2, I think.   
            </HomeAccordionContent>

            <HomeAccordionContent
              title='Downslider1'
              index={8}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}>
              Modified Slideshow1/Slideshow2 where slides appear from the top. I could not get all the controls to work reliably with all the transitions, the base logic was too convoluted and was NOT based on any index. Gave it up. Need something simpler with an index to start with, otherwise theres no way to do the paging or start/stop the autoplay reliably.    
            </HomeAccordionContent>
          </div>
        </div>
      </div>
    </>
  )
}

export default Accordion2
