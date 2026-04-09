import React, { useEffect, useState } from 'react'
import '../styles/Clock.css'

const Clock = () => {
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(() => {
        let interval;

        if(running){
            interval = setInterval(() => {
                setTime((prev) => prev + 1)
                
            }, 1000);
        }
           
        return () => clearInterval(interval)
    },[running])

    const timeFormat = () => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return (
              String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0')
        )

    }

    const handlestop = () => {
        setRunning(false)
        console.log("stop")
    }

    const handlestart = () => {
        setRunning(true)
        console.log("start")
    }

    const handlereset = () => {
        setRunning(false)
        setTime(0)
    }

  return (
    <div>
        <h1>Stopwatch</h1>
      <h2>{timeFormat()}</h2>

      <div className='buttons'>
      <button onClick={handlestop}>stop</button>
      <button onClick={handlestart}>start</button>
      <button onClick={handlereset}>restart</button>
      </div>
      

    </div>
  )
}

export default Clock
