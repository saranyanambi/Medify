import { useEffect, useState } from "react";
import searchIcon from "../../assests/searchIcon.png";
import "./Searchbooking.css";
import HospitalCard from "../HospitalCard/HospitalCard";
import BookingCards from "../BookingCards/BookingCards";
const Searchbooking=()=>{
    const [bookingData,setBookingData]=useState([]);
    const [query,setQuery]=useState("")

    useEffect(()=>{
        const storedData=localStorage.getItem("bookings");
        try{
            const parsedData=JSON.parse(storedData);
            setBookingData(parsedData || []);
        }
        catch(e){
            console.log(e);
        }
    },[])
    console.log(bookingData);
    const bookingSearch=(e)=>{
        setQuery(e.target.value);
        console.log(query);
    }

    const filteredBooking=bookingData.filter(item=>{
        item.hospitalInfo.hospitalName.toLowerCase().includes(query.toLowerCase());
    })



            return(
           
                <div>
            <form className="booking-form">
                 <div className="booking-search">
                <input type="text" placeholder="Search by Hospital" className="booking-input" onChange={bookingSearch}/>
                <button className="search-btn">
                                <img src={searchIcon} alt="Search Icon"/>Search
                            </button>
                </div>
            </form>
            <BookingCards bookingCards={query ? filteredBooking : bookingData}/>
            </div>
        )
}
export default Searchbooking;
