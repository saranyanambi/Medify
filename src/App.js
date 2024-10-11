import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Find from "./Components/Find/Find";
import Booking from "./Components/Booking/Booking";
import { TotalHospitalsContext } from "./Components/Context/Context";
import { BookingContext } from "./Components/Context/Context";
import './App.css';

function App() {
  const [bookingData,setBookingData]=useState([]);
  const [totalHospital,setTotalHospital]=useState([]);
  return (
    <div className="App">
      <BookingContext.Provider value={[bookingData,setBookingData]}>
        <TotalHospitalsContext.Provider value={[totalHospital, setTotalHospital]}>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}/> 
         <Route path="/Find" element={<Find/>}/> 
         <Route path="/booking" element={<Booking/>}/>
      </Routes>
     </BrowserRouter>
     </TotalHospitalsContext.Provider>
     </BookingContext.Provider>
    </div>
  );
}

export default App;
