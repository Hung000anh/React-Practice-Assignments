import React, { useState } from 'react'


function App() {
  const [foods, setFoods] = useState(["Apple", "Banana", "Cherry"]);
  function addFood() {
    const newFood = document.getElementById('foodId').value;
    setFoods((prevFoods) => [...prevFoods, newFood]);
    document.getElementById('foodId').value = ''; // Clear input field after adding
  }
  function removeFood(index) {
    setFoods((prevFoods) => prevFoods.filter((_, i) => i !== index));
  }
  return (
    <>
      <h1>Food List</h1>
      <ul>
        {foods.map((food, index) => 
        <li key={index} onClick={() => removeFood(index)}> {food}</li>)}
      </ul>
      <input id='foodId' type="text" placeholder='Enter food name'/>
      <button onClick={addFood}>Enter</button>
    </>
  )
}

export default App
