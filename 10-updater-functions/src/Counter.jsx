import React, { useState } from "react";

function Counter()
{
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count => count + 1);
    }
    const decrement = () => {
        setCount(count => count - 1);
    }
    const reset = () => {
        setCount(0);
    }
    return (
        <div className="counter-container">
            <h1 className="counter-display">Count: {count}</h1>
            <button className="counter-bttn" onClick={increment}>Increment</button>
            <button className="counter-bttn" onClick={decrement}>Decrement</button>
            <button className="counter-bttn" onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter;

