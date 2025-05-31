import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() =>{
    const intervalid = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalid);
    }
  }, [])

  function formatTime()
  {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
  }

  function padZero(number)
  {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <>
      <body>
        <div className='clock-app'>
          <span>{formatTime()}</span>
        </div>
      </body>
    </>
  )
}

export default App
