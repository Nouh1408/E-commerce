import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {

  
  return (
    <div className='container mx-auto px-4 mt-12'>
      <div className=" w-3/4">
      <h1 className="text-3xl font-medium mb-4">login now</h1>
      <form className="flex flex-col space-y-4">
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
  
        <div className=' flex justify-between'>
        <Link
          className="font-medium text-md hover:text-green-700 transition-all duration-500"
          to=""
        >
          forget your password ?
        </Link>
  
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
