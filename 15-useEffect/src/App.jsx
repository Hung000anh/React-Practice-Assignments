import {useState, useEffect } from 'react'

function App() {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    console.log('useEffect called')
  , [width, height]})

  function handleResize() {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    return () => {
      window.removeEventListener('resize', handleResize)
      console.log('useEffect cleanup called')
    }
  }
  return (
    <>
      <p>Windown Width: {width}px</p>
      <p>Windown Height: {height}px</p>
    </>
  )
}

export default App
