

import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Login from './Components/Login/Login.jsx'


function App() {

  const router = createBrowserRouter([
    {path:"",element:<Layout />,children:[
      {path:"login",element:<Login/>},
    ]}
  ])
  
  
  return (
     <RouterProvider router={router} />
    
  )
}

export default App
