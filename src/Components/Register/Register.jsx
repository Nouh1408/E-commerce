import { useState } from "react"
import React from 'react'


export default function Register() {
  const [NameAlert, setNameAlert] = useState(false)
  const [PassAlert, setPassAlert] = useState(false)
  const [EmailAlert, setEmailAlert] = useState(false)
  const [PhoneAlert, setPhoneAlert] = useState(false)
  const [PassAlertCheck, setPassAlertCheck] = useState(false)

  const handle =(e) =>{
    if(!e.target.value){
      setNameAlert(true)
    } else{
      setNameAlert(false)
    }
  }

  const handle1 =(e) =>{
    if(!e.target.value){
      setPassAlert(true)
  } else{
    setPassAlert(false)
  }
}
  const handle2 =(e) =>{
    if(!e.target.value){
      setEmailAlert(true)
  } else{
    setEmailAlert(false)
  }
}

const handle3 =(e) =>{
  if(!e.target.value){
    setPhoneAlert(true)
    } else{
      setPhoneAlert(false)
      }
}

const handle4 =(e) =>{
  if(!e.target.value){
    setPassAlertCheck(true)
    } else{
      setPassAlertCheck(false)
      }
      }

  return (
    <div className='container mx-auto px-4 mt-12'>
      <div className=" w-3/4">
      <h1 className="text-3xl font-medium mb-4">register now</h1>
      
      <form className="flex flex-col space-y-4">
        <label htmlFor="nameF" className="text-lg font-medium">Name :</label>
        <input 
        type="text"
         name="nameF"
          id="nameF"
          className="border border-gray-300 p-2 rounded-md w-full"
          onBlur={handle}
          />
          {
          NameAlert && (<div className="p-4 mb-4 text-sm text-red-600 rounded-lg bg-red-200" role="alert">name is required</div>)
          }


        <label htmlFor="emailF" className="text-lg font-medium">
          Email:
        </label>
        <input
          type="email"
          id="emailF"
          name="emailF"
          className="border border-gray-300 p-2 rounded-md w-full"
          onBlur={handle2}
        />
        {
          EmailAlert && (<div className="p-4 mb-4 text-sm text-red-600 rounded-lg bg-red-200" role="alert">email is required</div>)
        }
  
  
        <label htmlFor="passF" className="text-lg font-medium">
          Password:
        </label>
        <input
          type="password"
          id="passF"
          name="passF"
          className="border border-gray-300 p-2 rounded-md w-full"
          onBlur={handle1}
        />
        {
          PassAlert && (<div className="p-4 mb-4 text-sm text-red-600 rounded-lg bg-red-200" role="alert">password is required</div>)
        }

        <label htmlFor="re" className="text-lg font-medium">re-enter password :</label>
        <input type="password"
        name='re'
        id='re'
          className="border border-gray-300 p-2 rounded-md w-full"
          onBlur={handle4}
        />

{
          PassAlertCheck && (<div className="p-4 mb-4 text-sm text-red-600 rounded-lg bg-red-200" role="alert">re password is required</div>)
          }

        <label htmlFor="phone" className="text-lg font-medium">Phone :</label>
        <input type="tel"
        name='phone'
        id='phone'
          className="border border-gray-300 p-2 rounded-md w-full"
          onBlur={handle3}
        />
        {
          PhoneAlert && (<div className="p-4 mb-4 text-sm text-red-600 rounded-lg bg-red-200" role="alert">phoneNumber is required</div>)
          }
        
  
        <div className=' flex flex-row-reverse'>
  
        <button
          type="submit"
          className="border border-gray-400 px-4 py-2 rounded-md text-gray-600 w-fit"
        >
          login now
        </button>
        </div>
      </form>
  </div>
    </div>
  )
  }
