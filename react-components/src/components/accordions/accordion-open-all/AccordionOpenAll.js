import React, { useState } from 'react'
import './AccordionOpenAll.css'
// import FaArrowAltCircleDown from 'react-icons'
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa'
//https://www.cluemediator.com/create-an-accordion-component-in-react
import Navbar from '../../Navbar'

function App() {
  return (
    <>
      <div className='basis-3/4 flex-column flex-center'>
        <h3 className='font-bold text-lg'>Accordion: Open All - </h3>
        <p>
          With this accordion component you can open ALL the accordion content
          at the same time.
        </p>
        <Accordion title='What is Lorem Ipsum?'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Accordion>
        <Accordion isExpand={true} title='Why do we use it?'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Accordion>
        <Accordion title='Where does it come from?'>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </Accordion>
        <Accordion title='Where can I get some?'>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary.
        </Accordion>
      </div>
      <Navbar />
    </>
  )
}

const Accordion = ({ children, title, isExpand = false }) => {
  const [expand, setExpand] = useState(isExpand)
  return (
    <>
      <div className='box p-2'>
        <div
          className='title-box'
          onClick={() => setExpand((expand) => !expand)}>
          <span className='title'>{title}</span>
          <span className='icon'>
            {!expand ? <FaArrowAltCircleDown /> : <FaArrowAltCircleUp />}
          </span>
          <div className='clearfix'></div>
        </div>
        {expand && <div className='content'>{children}</div>}
      </div>
    </>
  )
}

export default App
