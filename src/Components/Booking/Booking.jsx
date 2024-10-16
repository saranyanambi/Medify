import { useState } from "react";
import BookingCards from "../BookingCards/BookingCards";
import Navbar from "../Navbar/Navbar";
import Searchbooking from "../Searchbooking/Searchbooking";
import FooterTop from "../FooterTop/FooterTop";
import MainFooter from "../Footer/Footer";

const Booking=()=>{
    const [filteredCard,setFilteredCard]=useState([]);
    return(
        <>
        <Navbar isBook={true}/>
        <Searchbooking setfilteredCard={setFilteredCard}/>
        <BookingCards filteredCard={filteredCard}/>
        <FooterTop/>
        <MainFooter/>
       
        </>
    )
}

export default Booking;