import { useState } from 'react'
export default function Test() {
  const [state1, setState1] = useState({
    prop1: false,
    prop2: false,
    prop3: false,
  })

  const [state2, setState2] = useState({
    prop1: false,
    prop2: false,
    prop3: false,
  })

  const [state3, setState3] = useState({
    prop1: false,
    prop2: false,
    prop3: false,
  })

  const handleClick = () => {
    // Example 1 -Deletes everything but the toggled property
    setState1((prevState) => ({ prop3: !prevState.prop3 }))

    // Example 1 - Deletes everything but the toggled property
    setState2((prevState) => {
      return { prop3: !prevState.prop3 }
    })

    // Example 3 - Toggles the property while preserving other properties
    setState3((prevState) => ({ ...prevState, prop3: !prevState.prop3 }))
  }

  console.log('Example 1 state1 :>> ')
  console.log(state1)

  console.log('Example 2 state2 :>> ')
  console.log(state2)

  console.log('Example 3 state3 :>> ')
  console.log(state3)

  return (
    <div className='App'>
      <button onClick={handleClick}>Show</button>
      {state3.prop3 && <h1>Hello World</h1>}
    </div>
  )
}
