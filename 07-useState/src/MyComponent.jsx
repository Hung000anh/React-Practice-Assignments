import React, {useState} from "react";

function MyComponent() {
    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)
    const updateName = () => {
        setName( "Spongebob");
        // console.log(name)
    }

    const incrementAge = () => {
        setAge(age + 1);
        // console.log(age)
    }
    const toggleEmployeeStatus = () => {
        setIsEmployed(!isEmployed);
        // console.log(isEmployed)
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Set Age</button>
            <p>Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployeeStatus}>Toggle Status</button>
        </div>
    )
}
export default MyComponent;