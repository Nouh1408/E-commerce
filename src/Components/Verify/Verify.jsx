import React from 'react'
import styles from './Verify.module.css'

export default function Verify() {
  return (
    <div className='container mx-auto px-4 mb-12'>
    <h1 className='text-4xl mb-5'>Please enter your verification code</h1>
    <div className='w-1/4'>
    <input type="email" className=" mb-5 border border-gray-300 p-2 rounded-md w-full" placeholder='email'/>
    <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 transition-all duration-500">verify</button>
    </div>
    </div>
  )
}
