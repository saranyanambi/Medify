import { useEffect, useState } from "react";
import searchIcon from "../../assests/searchIcon.png";
import "./Searchbooking.css";
import HospitalCard from "../HospitalCard/HospitalCard";
import BookingCards from "../BookingCards/BookingCards";
import { BookingContext } from "../Context/Context";
const Searchbooking=({setfilteredCard})=>{

   
    const [bookingData,setBookingData]=useState([]);
    const [query,setQuery]=useState("")

    useEffect(()=>{
        const storedData=localStorage.getItem("bookings");
       
        try{
            const parsedData=JSON.parse(storedData);

            
            if(parsedData){
               setBookingData(parsedData);
                setfilteredCard(parsedData);
            }
        }
        catch(e){
            console.log(e);
        }
    },[setfilteredCard])
   
    const bookingSearch=(e)=>{
        e.preventDefault()
    const filteredBooking = bookingData.filter(item => 
        item.hospitalInfo.hospitalName.toLowerCase().includes(query.toLowerCase())
    );
    

    setfilteredCard(filteredBooking);

    setQuery("");
}


            return(
           
                <div>
            <form className="booking-form" onSubmit={bookingSearch}>
                 <div className="booking-search">
                <input type="text" placeholder="Search by Hospital" className="booking-input" value={query} onChange={(e)=>setQuery(e.target.value)}/>
                <button className="search-btn"  type="submit">
                                <img src={searchIcon} alt="Search Icon"/>Search
                               
                            </button>
                            
                </div>
            </form>

            </div>
        )
}
export default Searchbooking;
