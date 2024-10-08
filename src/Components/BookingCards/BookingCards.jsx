import { useEffect, useState } from "react";

import sensodyneimg from "../../assests/sensodyne.png";
import hospitalimg from "../../assests/findhospital.png";
import thumbs from "../../assests/thumbsup.png";
import tick from "../../assests/tick.png";
import "./BookingCards.css";

const BookingCards = ({bookingCards}) => {
    // const [bookingData, setBookingData] = useState([]);
    if (!bookingCards || bookingCards.length === 0) { // Check for undefined or empty array
        return 
    }
    // useEffect(() => {
    //     const storedData = localStorage.getItem("bookings");
      
    //         try {
    //             const parsedData = JSON.parse(storedData);
    //             setBookingData(parsedData);
    //         } catch (error) {
    //             console.error("Error parsing JSON from localStorage:", error);
    //         }
    //     },
    //  []);
      
    // if (bookingData.length === 0) {
    //     return <h1>No bookings found</h1>; 
    // }

    return (
        <div className="booking-container">
        {/* <div className="booking-total"> */}
        <div className="booking-card-container">
            {
        bookingCards.map((item)=>(
            <div className="booking-card-date"> 
            <div className="booking-card">
                <div className="hospital-img">

                    <img src={hospitalimg} alt="hospital-img" />
                    <div className="tick-img">
                    <img src={tick} alt="tick"/>
                    </div>
                </div>
                <div className="booking-detail">
                    <div className="booking-road">{item["hospitalInfo"]["hospitalName"]}</div>
                    <div className="booking-address">
                        <div className="booking-city">{`${item["hospitalInfo"]["city"]}, ${item["hospitalInfo"]["country"]}`}</div>
                        <div className="booking-street">{item["hospitalInfo"]["hospitalType"]}</div>
                        <div className="booking-street">more</div>
                    </div>
                    <div className="fees">
                        <span className="free">FREE</span>
                        <span className="booking-street">{`$${500}`}</span>
                        <span className="booking-street">Consultation fee at clinic</span>
                    </div>
                    <div className="like">
                        <img src={thumbs} alt="thumbs" />
                        {item["hospitalInfo"]["Hospital overall rating"] !== "Not Available" && (
                            <span>{item["hospitalInfo"]["rating"]}</span>
                        )}
                    </div>
                </div>
                <div className="time-slot">
                    <div ><button className="btn-2">{item["time"]}</button></div>        
                    <div><button className="btn-1">{item["day"]}</button></div>
                    
                    </div>
                
            </div>
           
            </div> 

))}
</div>

<div className="sensodyne">
<img src={sensodyneimg} alt="Sensodyne" />
</div>
{/* </div> */}
</div>
    )
}

export default BookingCards;
