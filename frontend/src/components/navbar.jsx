import React from 'react'
import '../css/navbar.css'
import { UserButton } from '@clerk/clerk-react'
import { NavLink } from 'react-router-dom'




const navbar = () => {
  return (
    <>
    <div className='navbar-container'>

        <div className='logo wave-text'>ResumeAI
           



        </div>
        
        
        <ul className='navbar'>
            
           <li> <NavLink to="/home">Home</NavLink></li>
            {/* <li><NavLink to="/history">Your Resumes</NavLink></li> */}
           
            <li><UserButton/></li>
        </ul>
      
    </div>


 
    </>
  )
}

export default navbar
