import React, { useEffect, useState } from 'react'
import { CiStopwatch } from "react-icons/ci";
import './App.css'
export default function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());


    }, 1000);
    return () => clearInterval(timerId);
  }, [])
  return (
    <div className="home flex    bg-cyan-500 ">
      <h1 className="text-3xl font-bold  text-sky-600 flex m-auto px-4 border-2 border-cyan-50 rounded-xl bg-black py-3 justify-center  ">
        <CiStopwatch className='text-4xl font-bold' />
        {time.toLocaleTimeString()}<span>{time.getHours() >= 12 ? " PM" : " AM"}</span>
      </h1>
    </div >
  )
}
