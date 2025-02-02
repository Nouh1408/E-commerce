

import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Posts from './Components/Posts/Posts.jsx'
import Layout from './Components/Layout/Layout.jsx'


function App() {

  const router = createBrowserRouter([
    {path:"",element:<Layout />,children:[
      {path:"home",element:<Home/>},
      {path:"about",element:<About/>},
      {path:"posts", element:<Posts/>},
    ]}
  ])
  
  
  return (
     <RouterProvider router={router} />
    
  )
}

export default App
