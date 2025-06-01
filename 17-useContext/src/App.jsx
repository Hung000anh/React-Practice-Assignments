import { useState } from 'react'
import { createContext } from 'react'

import './App.css'
import ComponentA from './ComponentA'

function App() {

  return (
    <>
      <div>
        <h1>Use Context</h1>
        <ComponentA></ComponentA>
      </div>
    </>
  )
}

export default App
