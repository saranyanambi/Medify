import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Find from "./Components/Find/Find";
import Booking from "./Components/Booking/Booking";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}/> 
         <Route path="/Find" element={<Find/>}/> 
         <Route path="/booking" element={<Booking/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
