import { useState } from "react";
import BookingCards from "../BookingCards/BookingCards";
import Navbar from "../Navbar/Navbar";
import Searchbooking from "../Searchbooking/Searchbooking";

const Booking=()=>{
    const [filteredCard,setFilteredCard]=useState([]);
    return(
        <>
        <Navbar/>
        <Searchbooking setfilteredCard={setFilteredCard}/>
        <BookingCards filteredCard={filteredCard}/>
       
        </>
    )
}

export default Booking;