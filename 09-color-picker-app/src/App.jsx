import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('#FFFFFF')

  function handleChangeColor(event) {
    setColor(event.target.value)
  }

  return (
    <>
     <div className='color-picker-container'>
        <h1>Color Picker</h1>
        <div className="color-display" style={{ backgroundColor: color }}>
          <p>Selected color: {color}</p>
        </div>
        <label>Select a color:</label>
        <input type="color" value={color} onChange={handleChangeColor}/>
     </div>
    </>
  )
}

export default App
