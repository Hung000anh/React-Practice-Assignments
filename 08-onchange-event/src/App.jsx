import React, { useState } from 'react';

function App() {
  const [name, setCount] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("visa");
  const [shipping, setShipping] = useState("Delivery")
  function handleNameChange(event) {
    setCount(event.target.value)
  }
  function handelQuantityChange(event)
  {
    setQuantity(event.target.value)
  }
  function handleCommentChange(event) {
    setComment(event.target.value)
  }
  function handlePaymentChange(event) {
    setPayment(event.target.value)
  }

  function handleShippingChange(event) {
    setShipping(event.target.value)
  }
  return (
    <>
      <div>
        <input value={name} onChange={handleNameChange}/>
        <p>Name: {name}</p>
        <input type='number' value={quantity} onChange={handelQuantityChange}/>
        <p>Quantity: {quantity}</p>
        <textarea type="text" value={comment} onChange={handleCommentChange} placeholder='Enter delivery instuctions '/>
        <p>Comment: {comment}</p>
        <select value={payment} onChange={handlePaymentChange}>
          <option value="">select an option</option>
          <option value="visa"> Visa</option>
          <option value="master card"> MasterCard</option>
          <option value="gift card"> Gift Card</option>
        </select>
        <p>Payment: {payment}</p>
      <label >
        <input 
          type="radio" 
          value={"Pick Up"} 
          checked = {shipping === "Pick Up"} 
          onChange = {handleShippingChange} 
          />
        Pick up
      </label>
      <br />
      <label >
        <input 
          type="radio" 
          value={"Delivery"} 
          checked = {shipping === "Delivery"} 
          onChange = {handleShippingChange} 
          />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
      
      </div>

      
    </>

  )  
}

export default App
