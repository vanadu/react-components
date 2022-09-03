import { createContext, useState } from 'react'

export const DownsliderContext = createContext()

//prettier-ignore
export function DownsliderProvider({ children }) {
  const [context, setContext] = useState({
    items: [],
    activated: false,
    count: 0,
  })

  return (
    <DownsliderContext.Provider value={[context, setContext]}>
      {children}
    </DownsliderContext.Provider>
  )
}
