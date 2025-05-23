import React from "react"
import { useState } from 'react'
import Counter from "./Counter.jsx"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Counter></Counter>
    </>
  )
}

export default App
