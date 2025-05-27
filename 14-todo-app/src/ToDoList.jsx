import React, { useState } from 'react'

function ToDoList()
{
    const [tasks, setTasks] = useState(["Eat", "Sleep", "Code"]);
    const [task, setTask] = useState('');
    
    function handleAddTask(){
        if (task.trim() !== "") {
            setTasks((tasks) => [...tasks, task]);
            setTask(''); 
        }
    }
    function handleChange(e) {
        setTask(e.target.value);
    }

    function handleDeleteTask(index) {
        setTasks((tasks) => tasks.filter((_, i) => i !== index));
    }

    function handleMoveUp(index) {
        if (index > 0) { // Check if not the first item
            const newTasks = [...tasks]; // Create a copy of the tasks array
            [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]]; // Swap the items
            setTasks(newTasks);
        }
    }

    function handleMoveDown(index) {
        if (index < tasks.length - 1) { // Check if not the last item
            const newTasks = [...tasks]; // Create a copy of the tasks array
            [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]]; // Swap the items
            setTasks(newTasks);
        }
    }

    return(
        <div className='to-do-list'>
            <h1> To do list</h1>
            <div className="task-form">
                <input className="task-input" type="text" value={task} onChange={handleChange} placeholder='Enter a task... '/>
                <button className = "add-btn" type="button" onClick={() => handleAddTask()}>Add</button>
            </div>
            
            <ul>
                {
                tasks.map((task, index) => 
                <li key={index}> 
                    <span>{task}</span> 
                    <button className="delete-btn" onClick={() => handleDeleteTask(index)} >Delete</button>
                    <button className="up-btn" onClick={() => handleMoveUp(index)}>Up</button>
                    <button className="down-btn" onClick={() => handleMoveDown(index)}>Down</button>
                </li>) 
                
                }
                
            </ul>
            
        </div>
    )

}

export default ToDoList;