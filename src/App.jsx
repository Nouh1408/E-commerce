

import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Register from './Components/Register/Register.jsx'
import Login from './Components/Login/Login.jsx'


function App() {

  const router = createBrowserRouter([
    {path:"register", element:<Register />},
    {path:"login", element:<Login/>},
  ])
  return (
     <RouterProvider router={router} />
    
  )
}

export default App
