import { useEffect, useRef, useState, useContext } from 'react'
import { Downslider1Context } from '../../../context/Downslider1Context'

// !VA Extract the context from the import
//prettier-ignore
export function Downslider1({ children }) {
  // !VA Set the context, i.e. the POS which will be used throughout the component and its dependencies. Items is the array of items, activated is the boolean trigger. If activated is true, move the slide in. If it is false, move the slide out

  // !VA DO NOT FORGET THAT IF YOUR CONTEXT INCLUDES A USESTATE, YOU HAVE TO EXTRACT BOTH THE VARIABLE AND THE SETTER FROM THE CONTEXT!!!!!
  const [context, setContext] = useContext(Downslider1Context)

  const delay = 1000

  // !VA Set a ref to the timer object. We need the ref to refer to the timer in order to clearTimeout and setTimeout
  const timer = useRef(null)

  const [count, setCount ] = useState(0)

  useEffect(() => {
    // !VA NOW If context.play is true, clear the timeout and reset the timeout. This will just run the slideshow from the current context.item without changing anything else. Since it's the same timer, it will just resume. If context.play is false, then  clear the timeout.
    if (context.play && count <= (context.items.length / 2) + 1 ) {
      if (timer.current) clearTimeout(timer.current)
      timer.current = setTimeout(() => {
        if (context.items.length > 1 && context.activated) {
          // !VA Remove the first item in the array
          const head = context.items.shift()
          // console.log('head :>> ' + head)
          // !VA Push the next item in the array - shift and push cycles through the array
          context.items.push(head)
          console.log('head :>> ' + head);
        }
        // !VA Toggle the context.activated POS
        context.activated = !context.activated
        // !VA Write the current context, i.e. the items array and the toggle state of the activated property the context POS
        // !VA HERE
        setCount(count + 1)
        console.log('count :>> ' + count);
        setContext({ ...context })
      }, delay)
      // !VA return the function that resets the timer ref
      return () => {  
        clearTimeout(timer.current)
      }
    } else {
      return () => clearTimeout(timer.current)
    }
    
  })

  // !VA Log the context items and their activated property
  // console.log(context.items)
  // console.log(context.activated)

  // !VA NOTE height and width should be set in the CSS/SCSS for responsive projects.
  // !VA IMPORTANT: This component only renders once. 'children' contains the array of Downslider1Item components passed in from Downslider1Component component.
  return (
    <Downslider1Context.Provider value={[context, setContext]}>
      <div
        className='downslider-image-container'
        style={{
          // height: '600px',
          // width: '600px',
          position: 'relative',
          overflow: 'hidden',
        }}>
        {/* {init ? initialChild : children} */}
        {children}
      </div>
    </Downslider1Context.Provider>
  )
}

// !VA This component gets all the Downslider1 items, assigns a unique name to them, and passes that name in the children prop every time the component is mounted.
// !VA 'children' here is a single Downslider1Item with the data for a single item in the json data array.
//prettier-ignore
export function Downslider1Item({ children, autoplay }) {
  // !VA Generate a unique name for the slide and assign it to a ref. This uses the Javasscript performance.now method to generate what _should_ be a unique number value, since it takes the performance of the current function to the millisecond and then tacks on a random onto it - that is a very long number.
  const name = useRef(`${performance.now()}_${Math.random()}`)
  // !VA Get the context POS
  const [context, setContext ] = useContext(Downslider1Context)
  // !VA Set the POS for the ready state for sliding in the next slide
  const [stage, setStage] = useState('ready')
  // const [count, setCount] = useState(0)

  // !VA Run this once when the component is mounted. Here we populate the context.items POS with the unique name of the Downslider1 items when the component mounts, and remove them again when the component unmounts. THIS ONLY RUNS ONCE!!!!! It only runs once to populate the initial context.items array, which has SIX items, i.e. the unique name from name above for each data item. TWICE. The second 3 are duplicates.


  // !VA NOW This only sees the context POS state, i.e. when the component is mounted. It doesn't register the Play button click.
  useEffect(() => {
    context.items.push(name.current)
    return () => {
      // !VA Here we are de-populating the context.items array, removing the unique names one by run each time the component is unmounted.
      const index = context.items.indexOf(name.current)
    }
  }, [context.items])

  let activeName





    // console.log('Mark2 context.move :>> ' + context.move);
    let numImages
    useEffect(() => {
        // console.log('context.items.length :>> ' + context.items.length);
        numImages = context.items.length / 2
        // console.log('numImages :>> ' + numImages);
        if (context.move) {
          // console.log('context.count :>> ' + context.count);
          console.log('context.count :>> ' + context.count);
          if (context.count ) {
            activeName = context.items[context.count - 1]
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
          }
        }

    return () => {  
        setContext( prevState => ({ ...prevState, move: null }) )   
      }
    
  }, [context.move]);




  // !VA This runs every time the context POS changes. What that means is that each time the useEffect above runs and an item in the context array is changed, this useEffect runs also. I think...so it will run once for EACH item in the context POS. This is where we determine which slides to move.
  useEffect(() => {
    activeName = context.items[0]
    // !VA Set activeName to the unique name of the first element in the items array.

    // !VA The stage POS initializes with 'ready' so only setStage to 'on' or anything else if context.play is true. All the slides will wait off-container until the context.play is true and a stage value is set.
    if (context.play) {
      


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
    } 
  }, [context, context.count])

  // console.log('stage :>> ' + stage);

  // !VA Initialize the left and zIndex variables. They don't need to be state variables because they don't need to retain their values between renders.
  let bottom = 0
  let zIndex = 1

  // !VA 'ready' is the default position of the slides, i.e. left: 100% or all the way outside the container to the right. All the slides have the 'ready' case - it means they are waiting for an action. When case = 'on', the slide transitions to left: 0, i.e. slides in from the right and the zIndex is set to 1, pushing it to the top z-layer, making the slide visible. The previous slide retains its position at left: 0 but gets the z-index of 0, ensuring that it displays 'behind' the 'on' slide. So both the 'on' and the 'off' slide are at left: 0 until the next action, at which point the 'off' slide transitions back to left: 100% and the 'ready' stage.
  switch (stage) {
    case 'ready':
      bottom = '100%'
      zIndex = 1
      break
    case 'on':
      // !VA NOW  
        bottom = '0'
        zIndex = 2
      break
    case 'off':
      zIndex = 1
      break
    default:
  }


  return (
    <>
      <div
        className='downslider-content'
        style={{
          transition: '.5s',
          position: 'absolute',
          bottom: bottom,
          left: 0,
          zIndex: zIndex,
        }}>
        {children}
      </div>
    </>
  )
}
