

import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'


function App() {

  const router = createBrowserRouter([
    {path:"",element:<Layout />,children:[
      {path:"login",element:<Login/>},
      {path:"register",element:<Register/>},
    ]}
  ])
  
  
  return (
     <RouterProvider router={router} />
    
  )
}

export default App
