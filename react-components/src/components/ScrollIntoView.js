import { useRef, useEffect } from 'react'
import Navbar from './Navbar'
// !VA From: https://kbenbeneck.medium.com/using-scrollintoview-with-react-components-ba41df3ff12

// import Landing from '../scrollintoview/Landing'
// import About from '../scrollintoview/About'

//prettier-ignore
const Landing = ({ refProps, scrollCallback }) => {
  // !VA Accept the scrollCallback function as props to run on the click action below.
  console.log('HERE refProps.current :>> ');
  console.log(refProps.current);
  return (
    <>
    <div 
      ref={refProps}
      className='scrollintoview-landing'>
      <h3>Hello, I'm a Front End Developer.</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        eveniet aliquam at! Voluptatum dolorem sequi numquam ipsa deserunt nisi
        officiis, id pariatur, expedita, dolores iste vel optio obcaecati iusto
        rem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste mollitia
        voluptate quisquam necessitatibus assumenda veritatis odit asperiores
        architecto voluptas autem, esse debitis maxime enim obcaecati eveniet
        velit impedit. Sunt, iure!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
        explicabo blanditiis earum totam qui quisquam, esse eos omnis. Cum velit
        totam adipisci aspernatur distinctio repudiandae mollitia fuga quibusdam
        corrupti cumque?
      </p>
      {/* Run the function passed down from the parent ScrollIntoView component. The 'lifted' function is then run in the parent. scrollCallback contains the actual scrollIntoView function that is run on the aboutRef ref, i.e. the ref that refers to the Virtual DOM version of the DIV element to be scrolled. */}
      <button id="scroll-to-next" className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out m-5' onClick={(e) => scrollCallback(e)}>Scroll To Next Page</button>
    </div>
    </>
  )
}

//prettier-ignore
const About = ({ refProps, scrollCallback }) => {
  // !VA Destructure out the reference to the Virtual DOM element here from the passed-in props object. It was passed in from the parent ScrollIntoView component. The DOM element to be scrolled is now returned in the aboutRef.current property.

  return (
    <>
    <div 
      className='scrollintoview-about' 
      ref={refProps}
      >
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
        perferendis sit commodi assumenda vero aspernatur, tempore, omnis
        impedit corrupti error illo obcaecati officiis expedita id blanditiis
        sint harum ipsa quisquam.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
        necessitatibus doloremque saepe aspernatur eum esse molestiae. Molestiae
        fugit ipsa consequatur quae, eveniet ducimus voluptatibus asperiores
        temporibus eius! Cupiditate, aperiam inventore.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel illum,
        facilis culpa quisquam rem quos animi aliquam! Soluta nostrum porro
        minima consectetur velit beatae praesentium. Veniam, libero placeat?
        Maiores, cumque?
      </p>
      <button id="scroll-to-top" className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out m-5' onClick={(e) => scrollCallback(e)}>Scroll To Top</button>
    </div>
    </>
  )
}

//prettier-ignore
const ScrollIntoView = () => {

  // !VA This is the ref that will be passed to the About component as a prop, i.e. the refProps prop. This identifies the Virtual DOM element to be scrolled. This is how we target DOM elements in the React way.
  const aboutRef = useRef()
  const landingRef = useRef()
  

  // !VA This is the scroll function that will be passed as a prop to the Landing component. The scrollCallback is then run in the Landing component and the return value is 'lifted' to the parent with the callback function in the child Landing component
  const scrollCallback = (e) => {
    console.log('scrollCallback running...')
    console.log('HERE aboutRef.current :>> ');
    console.log(aboutRef.current);
    console.log('HERE landingRef.current :>> ');
    console.log(landingRef.current);
    if (e.target.id==='scroll-to-next') {
      aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if ( e.target.id==='scroll-to-top') {
      landingRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      console.log('ERROR: Element does not exist');
    }
  }


  return (
    <>
      <div className="flex flex-row">
        <div className="basis-3/4">
          {/* Pass the scrollCallback function to the child Landing component as props */}
          <Landing refProps={landingRef} scrollCallback={scrollCallback} />
          {/* Set the About component as a ref, i.e. a Virtual DOM reference to the DIV element in the actual DOM */}
          <About refProps={aboutRef} scrollCallback={scrollCallback}/>
        </div>
        <Navbar />  
      </div>
    </>
  )
}

export default ScrollIntoView
