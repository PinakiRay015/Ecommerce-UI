import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Signup from './components/Signup'
import Wishlist from './components/Wishlist'
import Cart from './components/Cart'
const App = () => {

  const router = createBrowserRouter([
    {
      path : '/',
      element : <><Navbar/><Home/></>
    },
    {
      path : '/contact',
      element : <><Navbar/><Contact/></>
    },
    {
      path : '/about',
      element : <><Navbar/><About/></>
    },
    {
      path : '/signup',
      element : <><Navbar/><Signup/></>
    },
    {
      path : '/wishlist',
      element : <><Navbar/><Wishlist/></>
    },
    {
      path : '/cart',
      element : <><Navbar/><Cart/></>
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
