import React from 'react'
import './App.css'
import data from './data'
export default function App() {
  return (
    <div className='wrapper' >
      <h1 className='heading' >User List</h1>
      {
        data.map((item) => {
          return <div className='list' key={item.id}>
            <p className='userName' >{item.name}</p>
            <p className='userSkill' >{item.skill}</p>
          </div>
        })
      }
    </div>
  )
}
