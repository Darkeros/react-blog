import React, { useState } from 'react'

export const useStore = () => {
  const [count, setCount] = useState(1)

  return {
    count,
    setCount,
  }
}

export const Context = React.createContext(useStore)
