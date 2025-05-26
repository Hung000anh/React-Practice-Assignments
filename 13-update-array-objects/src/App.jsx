import React, { useState } from 'react'

function App() {
  const [cars, setCars] = useState([]);
  const [carMake, setCarMake] = useState("");
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carModel, setCarModel] = useState("");

  function addCar() {
    const newCar = {
      make: carMake,
      year: carYear,
      model: carModel
    };
    setCars((cars) => [...cars, newCar]);

    setCarMake(''); // Clear input field after adding
    setCarYear(new Date().getFullYear()); // Reset to current year
    setCarModel(''); // Clear input field after adding
  }
  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }
  function handleYearChange(event) {
    setCarYear(event.target.value);
  }
  function handleModelChange(event) {
    setCarModel(event.target.value);
  }
  function handleRemoveCar(index) {
    return () => {
      setCars((cars) => cars.filter((_, i) => i !== index));
    };
  }


  return (
    <>
        <h1>Car List</h1>
        <ul>
          {cars.map((car, index) => <li id={index} onClick={handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}
        </ul>
        <input type="number" value={carYear} placeholder='Enter car year' onChange={handleYearChange}/> <br />
        <input type="text" value={carMake} placeholder='Enter car make' onChange={handleMakeChange}/> <br />
        <input type="text" value={carModel} placeholder='Enter car model' onChange={handleModelChange}/> <br />
        <button onClick={addCar}>Add Car</button>
    </>
  )
}

export default App
