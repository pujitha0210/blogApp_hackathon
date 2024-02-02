import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";


import Header from './components/Header'
import Footer from './components/Footer'
import Single from './pages/Single'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Write from './pages/Write'


import Admin from "./Admin/Admin";
import AdminViewPost from "./Admin/AdminViewPost";
import './style.scss'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path:"/admin",
    element:<Admin />,
  },
  {
    path:"/adminviewpost",
    element:<AdminViewPost />
  }
]);

function Layout(){
  return(
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

function App() {
  return (
    <div className="app">
      <div className="container">
      <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
