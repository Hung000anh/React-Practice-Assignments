import React, {useState, useEffect, useRef} from 'react'


function Stopwatch()
{
    const  [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedtime] = useState(0);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);
    useEffect(() => 
    {
        if(isRunning)
        {
            intervalRef.current = setInterval(()=>
            {
                setElapsedtime(Date.now() - startTimeRef.current);
            },10)

            return() =>
            {
                clearInterval(intervalRef.current)
            }
        }
    }, [isRunning])

    function start()
    {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
        console.log(startTimeRef.current)
    }
    function stop()
    {
        setIsRunning(false);

    }
    function reset()
    {
        setElapsedtime(0);
        setIsRunning(false);
    }

    function formatTime()
    {
        let hours =  Math.floor( elapsedTime / (1000 * 60 * 100))
        let minutes =  Math.floor( elapsedTime / (1000 * 60)  % 60)
        let second =  Math.floor( elapsedTime / (1000)  % 60)
        let milliseconds =  Math.floor( (elapsedTime % 1000) / 10)

        hours = String(hours).padStart(2, "0")
        minutes = String(minutes).padStart(2, "0")
        second = String(second).padStart(2, "0")
        milliseconds = String(milliseconds).padStart(2, "0")
        return `${hours}:${minutes}:${second}`;
    }


    return (
        <>
            <div className='stopwatch'>
                <div className='display'>{formatTime()}</div>
                <div className='control'>
                    <button type="button" onClick={start} className='start-button'>Start</button>
                    <button type="button" onClick={stop} className='stop-button'>Stop</button>
                    <button type="button" onClick={reset} className='reset-button'>Reset</button>
                </div>
            </div>
        </>
    )

}

export default Stopwatch;