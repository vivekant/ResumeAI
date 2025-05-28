import React from 'react'
import '../css/navbar.css'
import resume1 from '../assets/resume1.png'
import resume2 from '../assets/resume2.png'
import resume3 from '../assets/resume3.png'
import resume4 from '../assets/resume4.png'
import { NavLink } from 'react-router-dom'

import { useUser } from '@clerk/clerk-react';
import { useEffect } from 'react';
import axios from 'axios';
const home = () => {
  const { user, isSignedIn } = useUser();
// username = user.username;
// email address= user.emailAddresses[0].emailAddress;
// user.phoneNumbers[0].phoneNumber
// user.fullName
console.log("app.jsx is here with vivedhara");
  useEffect(() => {


    if (isSignedIn) {
      
      const clerkid=user.id
      const email = user.emailAddresses[0].emailAddress;
      const phone = user.phoneNumbers[0].phoneNumber;
      const fullname = user.fullName;

      // Send data to the backend
      axios.post('http://localhost:3000/api/vivedhara/v1/dss/register', {
        clerkid,
        email,
        phone,
        fullname
      })
      .then(response => {
        console.log('User data sent successfully:', response);
      })
      .catch(error => {
        console.error('Error sending user data:', error);
      });

      
    }
  }, [isSignedIn, user]);


  return (
      <div className='navbar-container2'>
         <div className='button custom'><NavLink to='/getdetails' state={{from:'custom'}}>Custom</NavLink></div>
         <div className='bold'>OR</div>
    
    
         <div className='template'>
          <div className='button'>Choose Templates</div>
          <div className="images">
            <NavLink to='/getdetails' state={{from:'resume1'}}><img src={resume1} alt="" /></NavLink>
            <NavLink to='/getdetails' state={{from:'resume2'}}><img src={resume2} alt="" /></NavLink>
            <NavLink to='/getdetails' state={{from:'resume3'}}><img src={resume3} alt="" /></NavLink>
            <NavLink to='/getdetails' state={{from:'resume4'}}><img src={resume4} alt="" /></NavLink>
          
          </div>
         </div>
       </div>
  )
}

export default home
