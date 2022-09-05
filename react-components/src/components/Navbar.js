import { Link } from 'react-router-dom'
import Home from '../pages/Home'
import AccordionOpenAll from './accordions/accordion-open-all/AccordionOpenAll'
import AccordionOpenOne from './accordions/accordion-open-one/AccordionOpenOne'
import ReadMoreDemo from './ReadMoreDemo'
import ScrollIntoView from './ScrollIntoView'
import Slideshow from './slideshows/SlideshowComponent'
import Slideshow2 from './slideshows/Slideshow2Component'
import DownsliderComponent from './slideshows/DownsliderComponent'
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
              <Link to="/slideshow">Slideshow</Link>
            </li>
            <li>
              <Link to="/slideshow2">Slideshow2</Link>
            </li>
            <li>
              <Link to="/slideshow3">Slideshow3</Link>
            </li>
            <li>
              <Link to="/downslider">Downslider</Link>
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
