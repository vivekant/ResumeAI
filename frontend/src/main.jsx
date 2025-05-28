import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from '@clerk/clerk-react'
import { RouterProvider } from "react-router-dom";
import router from "./router/route.jsx";
// import 'dotenv/config'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
     
      <RouterProvider router={router}>
       <App />
      </RouterProvider>
    </ClerkProvider>
  </React.StrictMode>
);

