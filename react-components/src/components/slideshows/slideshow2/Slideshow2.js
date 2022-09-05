import { createContext, useContext, useEffect, useRef, useState } from 'react'

// !VA Create the context
const Slideshow2Context = createContext()

export function Slideshow2({ children, classname }) {
  // !VA Set the context, i.e. the POS which will be used throughout the component and its dependencies. Items is the array of items, activated is the boolean trigger. If activated is true, move the slide in. If it is false, move the slide out
  const [context, setContext] = useState({
    items: [],
    activated: false,
    count: 0,
  })
  const delay = 2000

  // !VA Set a ref to the timer object. We need the ref to refer to the timer in order to clearTimeout and setTimeout
  const timer = useRef(null)

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      if (context.items.length > 1 && context.activated) {
        // !VA Remove the first item in the array
        const head = context.items.shift()
        // !VA Push the next item in the array - shift and push cycles through the array
        context.items.push(head)
        // console.log('context.items :>> ')
        // console.log(context.items)
      }
      // !VA Toggle the context.activated POS
      context.activated = !context.activated
      // !VA Write the current context, i.e. the items array and the toggle state of the activated property the context POS
      setContext({ ...context })
    }, delay)
    // !VA return the function that resets the timer ref
    return () => clearTimeout(timer.current)
  })

  // !VA Log the context items and their activated property
  // console.log(context.items)
  // console.log(context.activated)

  // !VA Render the div containing the slide image, which is passed in from the Slideshow2Item component in the children prop. I neeed to refresh my memory on the value of the provider and how that fits in with the value prop.N
  // !VA NOTE height and width should be set in the CSS/SCSS for responsive projects.
  return (
    <Slideshow2Context.Provider value={[context, setContext]}>
      <div
        className={`${classname}`}
        style={{
          // height: '600px',
          // width: '600px',
          position: 'relative',
          overflow: 'hidden',
        }}>
        {children}
      </div>
    </Slideshow2Context.Provider>
  )
}

// !VA This component gets all the Slideshow2 items, assigns a unique name to them, and passes that name in the children prop every time the component is mounted.
export function Slideshow2Item({ children }) {
  // !VA Generate a unique name for the slide and assign it to a ref. This uses the Javasscript performance.now method to generate what _should_ be a unique number value, since it takes the performance of the current function to the millisecond and then tacks on a random onto it - that is a very long number.
  const name = useRef(`${performance.now()}_${Math.random()}`)
  // !VA Get the context POS
  const [context] = useContext(Slideshow2Context)
  // !VA Set the POS for the ready state for sliding in the next slide
  const [stage, setStage] = useState('ready')

  // !VA Run this once when the component is mounted. Here we populate the context.items POS with the unique name of the Slideshow2 items when the component mounts, and remove them again when the component unmounts.
  useEffect(() => {
    context.items.push(name.current)
    return () => {
      // !VA Here we are de-populating the context.items array, removing the unique names one by run each time the component is mounted.
      const index = context.items.indexOf(name.current)
      context.items.splice(index, 1)
    }
  }, [context.items])

  // !VA This runs every time the context POS changes, so it will run once for EACH item in the context POS. This is where we determine which slides to move.
  useEffect(() => {
    // !VA Set activeName to the unique name of the first element in the items array.
    const activeName = context.items[0]

    // !VA If the activeName value is equal to the name ref created at the top of the component, then set the state POS to on. This is the slide that is currently being slid into view.
    if (activeName === name.current) {
      setStage('on')
    }
    // !VA If the activeName value is NOT equal to the name ref AND the stage POS is on, then set the stage POS to off. This is the slide being shown BEHIND the currently moving slide.
    if (activeName !== name.current && stage === 'on') {
      setStage('off')
    }
    // !VA If the activeName is not equal to name.current and the stage POS is 'off'. These are the slides in their default position outside the container waiting to be moved.
    if (activeName !== name.current && stage === 'off') {
      setStage('ready')
    }
  }, [context])

  // !VA Initialize the left and zIndex variables. They don't need to be state variables because they don't need to retain their values between renders.
  let left = 0
  let zIndex = 0

  // !VA 'ready' is the default position of the slides, i.e. left: 100% or all the way outside the container to the right. All the slides have the 'ready' case - it means they are waiting for an action. When case = 'on', the slide transitions to left: 0, i.e. slides in from the right and the zIndex is set to 1, pushing it to the top z-layer, making the slide visible. The previous slide retains its position at left: 0 but gets the z-index of 0, ensuring that it displays 'behind' the 'on' slide. So both the 'on' and the 'off' slide are at left: 0 until the next action, at which point the 'off' slide transitions back to left: 100% and the 'ready' stage.
  switch (stage) {
    case 'ready':
      // !VA
      left = '100%'
      break
    case 'on':
      left = '0'
      zIndex = 1
      break
    case 'off':
      zIndex = 0
      break
    default:
  }

  return (
    <>
      <div
        className='slideshow2-content'
        style={{
          transition: '1s',
          position: 'absolute',
          top: 0,
          left: left,
          zIndex: zIndex,
        }}>
        {children}
      </div>
    </>
  )
}
