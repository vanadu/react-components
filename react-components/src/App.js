import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AccordionOpenAll from './components/accordions/accordion-open-all/AccordionOpenAll'
import AccordionOpenOne from './components/accordions/accordion-open-one/AccordionOpenOne'
import ReadMoreDemo from './components/ReadMoreDemo'
import ScrollIntoView from './components/ScrollIntoView'
import Slideshow1Component from './components/slideshows/slideshow1/Slideshow1Component'
import Slideshow2Component from './components/slideshows/slideshow2/Slideshow2Component'
import Slideshow3 from './components/slideshows/slideshow3/Slideshow3'
import Downslider1Component from './components/slideshows/downslider1/Downslider1Component'
import Downslider2 from './components/slideshows/downslider2/Downslider2'
import Test from './components/Test'

import './App.css'
// import ReadMoreDemo from './components/ReadMoreDemo'
// import ShowComponent from './components/ShowComponent'
// import ScrollIntoView from './components/ScrollIntoView'
// import Accordion2 from './components/accordion2/Accordion2'

//prettier-ignore
function App() {


  return (
    <div className='App'>
      <div className="flex flex-row bg-slate-200">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/accordion-open-all' element={<AccordionOpenAll />} /> 
            <Route path='/accordion-open-one' element={<AccordionOpenOne />} /> 
            <Route path='/read-more-demo' element={<ReadMoreDemo />} /> 
            <Route path='/scroll-into-view' element={<ScrollIntoView />} /> 
            <Route path='/slideshow1' element={<Slideshow1Component />} /> 
            <Route path='/slideshow2' element={<Slideshow2Component />} /> 
            <Route path='/slideshow3' element={<Slideshow3 />} /> 
            <Route path='/downslider1' element={<Downslider1Component />} /> 
            <Route path='/downslider2' element={<Downslider2 />} /> 
            <Route path='/test' element={<Test />} /> 
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
