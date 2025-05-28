import { useEffect } from "react";
import Navbar from "./components/navbar";
// import {  useUser } from "@clerk/clerk-react";

import "./App.css";
import {  useUser } from "@clerk/clerk-react";
import axios from "axios";
function MainApp() {










  return (
    <>
   <Navbar />



    </>
  );
}












export default function App() {






  return (
    // <>
    //  <div className="signincontainer">
    //     <div className="signinpage">
    //     <SignedOut>        
       
    //      <SignIn />
       
        
          
    //     </SignedOut>
    //     </div>
    //    </div>



    //   {/* Only show the main app if signed in */}
    //   <SignedIn>
    //     <MainApp />
    //   </SignedIn>
    // </>
    <>
     <MainApp />
    </>
  );
}