import React from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import StripePayment from "./stripe/stripeContainer"; 
import Success from "./stripe/Sucess"; 
import Cancel from "./stripe/Concel"; 
 
function App() { 
  return ( 
    <BrowserRouter> 
      <Routes> 
        <Route path="/success" element={<Success />} /> 
        <Route path="/cancel" element={<Cancel />} /> 
        <Route path="/" element={<StripePayment />} /> 
      </Routes> 
    </BrowserRouter> 
  ); 
}  
export default App; 