import { createContext, useState } from 'react'

export const Downslider1Context = createContext()

//prettier-ignore
export function Downslider1Provider({ children }) {
  const [context, setContext] = useState({
    items: [],
    activated: false,
    count: 0,
  })

  return (
    <Downslider1Context.Provider value={[context, setContext]}>
      {children}
    </Downslider1Context.Provider>
  )
}
