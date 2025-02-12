import React from 'react'
import {Link} from 'react-router-dom'


export default function Register() {
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
          />
        <label htmlFor="emailF" className="text-lg font-medium">
          Email:
        </label>
        <input
          type="email"
          id="emailF"
          name="emailF"
          className="border border-gray-300 p-2 rounded-md w-full"
        />
  
  
        <label htmlFor="passF" className="text-lg font-medium">
          Password:
        </label>
        <input
          type="password"
          id="passF"
          name="passF"
          className="border border-gray-300 p-2 rounded-md w-full"
  
        />
        <label htmlFor="renter">re-enter password :</label>
        <input type="password"
        name='ree'
        />
        
  
        <div className=' flex'>
  
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
