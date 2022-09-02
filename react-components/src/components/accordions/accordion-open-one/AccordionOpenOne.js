import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import AccordionOpenOneContent from './AccordionOpenOneContent'
// !VA https://iwconnect.com/creating-a-fully-functional-accordion-component-with-react-js-and-tailwindcss/
// !VA This uses Tailwind...

const Accordion2 = () => {
  const [activeIndex, setActiveIndex] = useState(2)

  return (
    <>
      <div className='basis-3/4 flex-column flex-center'>
        <h2 className='text-lg font-bold ml-5'>Accordion Open One</h2>
        <div className='container p-2 pl-5 flex flex-row'>
          <div className='flex flex-col justify-center items-center'>
            <p>
              This accordion opens only one item at a time AND has the accordion
              content in a separate component
            </p>
            <AccordionOpenOneContent
              title='Accordion 1'
              index={1}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}>
              This is Accordion 1 Content
            </AccordionOpenOneContent>

            <AccordionOpenOneContent
              title='Accordion 2'
              index={2}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}>
              This is Accordion 2 Content
            </AccordionOpenOneContent>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  )
}

export default Accordion2
