import { Link } from 'react-router-dom'
import Home from '../pages/Home'
import AccordionOpenAll from './accordions/accordion-open-all/AccordionOpenAll'
import AccordionOpenOne from './accordions/accordion-open-one/AccordionOpenOne'
import ReadMoreDemo from './ReadMoreDemo'
import ScrollIntoView from './ScrollIntoView'
import Slideshow from './slideshows/slideshow1/Slideshow1Component'
import Slideshow2 from './slideshows/slideshow2/Slideshow2Component'
import Slideshow3 from './slideshows/slideshow3/Slideshow3'
import Downslider1Component from './slideshows/downslider1/Downslider1Component'
import Downslider2 from './slideshows/downslider2/Downslider2'
import Test from './Test'

//prettier-ignore
const Navbar = () => {
  return (
    <>
      <aside className='basis-1/4'>
        <nav className='container p-2 mt-5'>
          <h2><Link to="/">Home</Link></h2>
          <ul>
            <li>
              <Link to="/accordion-open-all">Accordion: Open All</Link>
            </li>
            <li>
              <Link to="/accordion-open-one">Accordion: Open One</Link>
            </li>
            <li>
              <Link to="/read-more-demo">Read More Demo</Link>
            </li>
            <li>
              <Link to="/scroll-into-view">Scroll Into View</Link>
            </li>
            <li>
              <Link to="/slideshow1">Slideshow1</Link>
            </li>
            <li>
              <Link to="/slideshow2">Slideshow2</Link>
            </li>
            <li>
              <Link to="/slideshow3">Slideshow3</Link>
            </li>
            <li>
              <Link to="/downslider1">Downslider1</Link>
            </li>
            <li>
              <Link to="/downslider2">Downslider2</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default Navbar
