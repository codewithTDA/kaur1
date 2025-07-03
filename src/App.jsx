import React, { useRef, useState } from 'react'
import './App.css'
import { GrValidate } from "react-icons/gr";
export default function App() {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [msgName, setMsgName] = useState('');
  const [msgPhone, setMsgPhone] = useState('');
  const [msgEmail, setMsgEmail] = useState('');
  const [isValidName, setIsValidName] = useState(null);
  const [isValidPhone, setIsValidPhone] = useState(null);
  const [isValidEmail, setIsValidEmail] = useState(null);
  const validateName = (name) => {
    if (name.length >= 3) {
      return true
    }
    return false;
  }
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const validatePhone = (phone) => {
    const regex = /^\d{0,10}$/;

    return regex.test(phone);
  };
  const submitData = (e) => {
    e.preventDefault()
    if (validateName(name)) {
      setIsValidName(true);
      setMsgName('✅ Name is valid!');
      setShow(true)
    } else {
      setIsValidName(false);
      setMsgName('❌ Please enter a atleast 3 letter name.');
    }
    if (validateEmail(email)) {
      setIsValidEmail(true);
      setMsgEmail('✅ Email is valid!');
    } else {
      setIsValidEmail(false);
      setMsgEmail('❌ Please enter a valid email address.');
    }
    if (validatePhone(phone)) {
      setIsValidPhone(true);
      setMsgPhone('✅ Phone number is valid!');
    } else {
      setIsValidPhone(false);
      setMsgPhone('❌ Please enter a 10 digit number');
    }
  }
  return (
    <div className='wrapper flex bg-green-600 justify-center items-center' >
      <div className="formWrapper px-20 py-5 bg-amber-50">
        <form action="" className="form">
          {
            show && <h1>Welcome back {name} !</h1>
          }

          <div className="nameFiled">
            <label htmlFor="name">Name</label>
            <input className='border-black border-2' onChange={(e) => setName(e.target.value)} placeholder='Enter your Name' type="text" name="name" id="name" />
            <p className='nameErr' style={{
              color: isValidName ? 'green' : 'red',
              marginTop: '15px',
              fontSize: '10px',
              fontWeight: "bold"
            }}  >{msgName}</p>
          </div>
          <div className="emailFiled">
            <label htmlFor="email">Email</label>
            <input type="text" className='border-black border-2' onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email' name="email" id="email" />
            <p className='emailErr' style={{
              color: isValidEmail ? 'green' : 'red',
              marginTop: '5px',
              fontSize: '10px',
              fontWeight: "bold"
            }} >  {msgEmail} </p>
          </div>
          <div className="phoneFiled">
            <label htmlFor="phone">Email</label>
            <input type='phone' className='border-black border-2' onChange={(e) => setPhone(e.target.value)} placeholder='Enter your 10 digit phone number' name="phone" id="phone" maxLength={10} />
            <p className='phoneErr' style={{
              color: isValidPhone ? 'green' : 'red',
              marginTop: '5px',
              fontSize: '10px',
              fontWeight: "bold"
            }} >  {msgPhone} </p>
          </div>
          <div className='submit flex justify-center'>
            <button type="submit " onClick={submitData} className='bg-purple-500 px-5 my-2'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
