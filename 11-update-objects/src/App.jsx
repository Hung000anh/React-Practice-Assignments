import { useState } from 'react'
import React from 'react'

function App() {
  const [car, setCar] = useState({
    year: 2020,
    brand: "BMW",
    model: "X5",
  })
  function handleChangeYear(e) {
    setCar((prevCar) => {
      return { ...prevCar, year: e.target.value }
    })
  }
  function handleChangeBrand(e) {
    setCar(prevCar => ({ ...prevCar, brand: e.target.value }))
  }
  
  function handleChangeModel(e) {
    setCar(prevCar => ({ ...prevCar, model: e.target.value }))
  }
  return (
    <>
      <p>Your farvorite car: {car.brand} {car.model} {car.year} </p>
      <input type="number" value={car.year} onChange={handleChangeYear}/> <br />
      <input type="text" value={car.brand} onChange={handleChangeBrand}/> <br />
      <input type="text" value={car.model} onChange={handleChangeModel}/> <br />
    </>
  )
}

export default App
