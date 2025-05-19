import List from "./List"

function App() {
      const fruits = [
        {id : "1", name : "apple", calories: 95},
        {id : "2", name : "banana", calories: 105}, 
        {id : "3", name : "cherry", calories: 50}, 
        {id : "4", name : "coconut", calories: 283}, 
        {id : "5", name : "pineapple", calories: 452},
      ];
      const vegetable = [
        {id : "1", name : "potatos", calories: 110},
        {id : "2", name : "celery", calories: 15}, 
        {id : "3", name : "carrots", calories: 23}, 
        {id : "4", name : "corn", calories: 63}, 
        {id : "5", name : "brocoli", calories: 50},
      ];
  return (
    <>
    
      {fruits.length > 0 ? <List items = {fruits} category = "Fruit"></List> : null}
      {vegetable.length > 0 ? <List items = {vegetable} category = "Vegetable"></List> : null}

      {fruits.length > 0 && <List items = {fruits} category = "Fruit"></List> }
      {vegetable.length > 0 && <List items = {vegetable} category = "Vegetable"></List>}
    </>
  )
}

export default App
