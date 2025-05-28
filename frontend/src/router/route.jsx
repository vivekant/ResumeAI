import React from 'react'
import Navbar from '../components/navbar'
import Home from '../components/home'
import Getdetails from '../components/getdate'
import History from '../components/your_resume'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { SignedIn, SignedOut, SignIn } from "@clerk/clerk-react"
import Resume from '../components/resume'
import '../css/route.css'

const ProtectedRoute = ({ children }) => (
  <>
    <SignedIn>
      {children}
    </SignedIn>
    <SignedOut>
      <div className="signincontainer">
       <div className="signinpage">
         <SignIn />
       </div>
      </div>
    </SignedOut>
  </>
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Navbar />
        <Home />
      </ProtectedRoute>
    )
  },
  {
    path: "/getdetails",
    element: (
      <ProtectedRoute>
        <Navbar />
        <Getdetails />
      </ProtectedRoute>
    )
  },
  {
    path: "/history",
    element: (
      <ProtectedRoute>
        <Navbar />
        <History />
      </ProtectedRoute>
    )
    
  },
  {
    path: "/resume",
    element: (
      <ProtectedRoute>
        <Navbar />
        <Resume />
      </ProtectedRoute>
    )
  }

])

export default router
