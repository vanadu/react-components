import { useRef } from 'react'

import './App.css'
import ReadMoreDemo from './components/ReadMoreDemo'
import ShowComponent from './components/ShowComponent'
import ScrollIntoView from './components/ScrollIntoView'
import Accordion1 from './components/accordion1/Accordion'
import Accordion2 from './components/accordion2/Accordion2'

//prettier-ignore
function App() {
  const aboutRef = useRef()

  const scrollCallback = () => {
    console.log('scrollCallback running...')
    aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className='App'>
      <h1 className='font-serif text-xl font-bold'>React Component Repository</h1>
      {/* <div>
        <ScrollIntoView />
      </div> */}
        {/* <Accordion1 /> */}
        <Accordion1 />
      {/* <ScrollIntoView /> */}
      {/* <ReadMoreDemo />
      <ShowComponent /> */}
    </div>
  )
}

export default App
