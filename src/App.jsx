import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import Verify from "./Components/Verify/Verify.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Login /> },
        { path: "sign-in", element: <Login /> },
        { path: "sign-up", element: <Register /> },
        { path: "verify", element: <Verify /> }, 
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
