import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './App.css'
import Alert from 'react-bootstrap/Alert';
export default function App() {
  const [value, setValue] = useState(0)
  const message = () => {
    setMsg(true)
  }
  const increment = () => {
    setValue((value) => { return value + 1 })
  }
  const decrement = () => {
    if (value > 0) setValue((value) => { return value - 1 })
  }
  const reset = () => {
    setValue(0)
  }
  return (

    <div className="app-container">
      {
        (value == 3) ? <Alert variant='success'>
          "Great! You reached 10!"
        </Alert> : ''
      }
      <h1>{value}</h1>
      <div>
        <Button className='button' onClick={increment} variant="success">Increment</Button>
        <Button className='button' onClick={decrement} variant="danger">Decrement</Button>
        <Button className='button' onClick={reset} variant="warning">Reset</Button>
      </div>

    </div>
  )
}
