import "../FindHospitalsList/HospitalList.css";
import sensodyneimg from "../../assests/sensodyne.png";
import hospitalimg from "../../assests/findhospital.png";
import thumbs from "../../assests/thumbsup.png";
import Dates from "../Dates/Dates"; // Ensure this is the correct path
import { useEffect, useState } from "react";
import TabPanel from "../TabPanel/TabPanel";
import tick from "../../assests/tick.png";
const HospitalCard=({totalhospital})=>{


    const [datesVisible, setDatesVisible] = useState(false);
    const [dateTime, setDateTime] = useState({});
    const[day,setDay]=useState("");
    const[time,setTime]=useState("");
    const [hospitalInfo, setHospitalInfo] = useState({});
    const [bookings, setBookings] = useState([]);
    const [activeHospitalIndex, setActiveHospitalIndex] = useState(null);
    const [dateInfo, setDateInfo] = useState({});
    const [booked,setBooked]=useState({})
    const [id,setId]=useState("")
    

    useEffect(()=>{
            const localbookings=JSON.parse(localStorage.getItem("bookings")) || [];
            setBookings(localbookings);

            const bookedMap={};
            localbookings.forEach(element => {
                bookedMap[element.hospitalInfo.id]=true;
            });
                setBooked(bookedMap);
   },[])

   if (!totalhospital) return null;

    const handleClick = (item,index) => {
        // setDatesVisible(true); // Show the Dates component
        setActiveHospitalIndex(index);
        console.log(datesVisible)
        setId(item["Provider ID"]);
        setHospitalInfo({
            hospitalName: item["Hospital Name"],
            city: item["City"],
            county: item["State"],
            rating: item["Hospital overall rating"],
            hospitalType: item["Hospital Type"],
            id:item["Provider ID"]
    });
    };

    const handleButton = () => {
        // if (!day.length || !time.length) {
        //     return alert("Select Slot Date and Time to book.");
        // }

        // // Retrieve the current times for the selected day
        // const existingData = JSON.parse(localStorage.getItem(day));
        // const times = existingData.time || [];

        // // Check if the time already exists
        // if (!times.includes(time)) {
        //     // Add the new time to the array
        //     times.push(time);

        //     // Update local storage with the new array
        //     localStorage.setItem(day, JSON.stringify({ time: times }));
        // } else {
        //     alert("This time is already booked for the selected day.");
        // }
        
        // const newBooking = { day, data: hospitalInfo, time };
   
        // setBookings([...bookings, newBooking]);
        // localStorage.setItem("bookings",JSON.stringify([...bookings, { day, times: [time], hospitalInfo }]))
        // console.log(newBooking); // For debugging

        // alert("New Booking Created!");


        // if (!day.length || !time.length) {
        //     return alert("Select Slot Date and Time to book.");
        // }

        // // Clone the current bookings to modify

        
        // const updatedBookings = { ...bookings };

        // // If the day exists, update it; if not, create it
        // if (!updatedBookings[day]) {
        //     updatedBookings[day] = {
        //         times: [time],
        //         hospitalInfo
        //     };
        // } else {
        //     // Check if the time is already booked
        //     if (!updatedBookings[day].times.includes(time)) {
        //         updatedBookings[day].times.push(time);
        //     } else {
        //         return alert("This time is already booked for the selected day.");
        //     }
        // }

        // // Update state and local storage
        // setBookings(updatedBookings);
        // localStorage.setItem('bookings', JSON.stringify(updatedBookings));

        // alert("New Booking Created!");


        // if (!day.length || !time.length) {
        //     return alert("Select Slot Date and Time to book.");
        // }

        // const providerId = hospitalInfo.id; // or use a unique ID
        // const updatedBookings = { ...bookings };

        // // Initialize the provider ID if it doesn't exist
        // if (!updatedBookings[providerId]) {
        //     updatedBookings[providerId] = {
        //         [day]: [],
        //         hospitalInfo,
               


        //     };
        // }

        
        // // If the day exists, update it; if not, create it
        // if (!updatedBookings[providerId][day]) {
        //     updatedBookings[providerId][day] = [];
        // }

        // // Check if the time is already booked
        // if (!updatedBookings[providerId][day].includes(time)) {
        //     updatedBookings[providerId][day].push(time);
        // } else {
        //     return alert("This time is already booked for the selected day.");
        // }

        // // Update state and local storage
        // setBookings(updatedBookings);
        // localStorage.setItem('bookings', JSON.stringify(updatedBookings));

        // alert("New Booking Created!");


       
            if (!day.length || !time.length) {
                return alert("Select Slot Date and Time to book.");
            }
            setBooked(true);
            // Retrieve existing bookings from localStorage
            const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
        
            // Create a new booking entry
            const newBooking = {
                day,
                time,
                hospitalInfo
            };
        
            // Check if this booking already exists
            const isBookingExists = existingBookings.some(booking => 
                booking.hospitalInfo.id === hospitalInfo.id && 
                booking.day === day && 
                booking.time === time
            );
        
            if (isBookingExists) {
                return alert("This time is already booked for the selected day.");
            }
        
            // Add the new booking to the existing bookings
            existingBookings.push(newBooking);
        
            // Update localStorage
            localStorage.setItem("bookings", JSON.stringify(existingBookings));
            
            const providerId=hospitalInfo.id;

            setBooked(prev=>({...prev,[providerId]:true}))

            console.log(booked)
        
            alert("New Booking Created!");
        
        
        
    };

    

    const dayselect=(day)=>{
         // Initialize the entry in local storage if it doesn't exist
        setDay(day)
    }

    const timeselect=(time)=>{
        setTime(time);
        console.log(time)
    }
    console.log("hospital")

    return totalhospital.map((item,index) => (
        <div className="hospital-card-date"> 
          <div className="hospital-card" onClick={() => handleClick(item,index)} key={item["Provider ID"]}>
              <div className="hospital-img">
                  <img src={hospitalimg} alt="hospital-img" />
                { booked[item["Provider ID"]] &&( <div className="tick-img">
                    <img src={tick} alt="tick"/>
                    </div>)}
              </div>
              <div className="hospital-detail">
                  <div className="hospital-road">{item["Hospital Name"]}</div>
                  <div className="hospital-address">
                      <div className="hospital-city">{`${item["City"]}, ${item["State"]}`}</div>
                      <div className="hospital-street">{item["Hospital Type"]}</div>
                      <div className="hospital-street">more</div>
                  </div>
                  <div className="fees">
                      <span className="free">FREE</span>
                      <span className="hospital-street">{`$${500}`}</span>
                      <span className="hospital-street">Consultation fee at clinic</span>
                  </div>
                  <div className="like">
                      <img src={thumbs} alt="thumbs" />
                      {item["Hospital overall rating"] !== "Not Available" && (
                          <span>{item["Hospital overall rating"]}</span>
                      )}
                  </div>
              </div>
              <div className="free-visit">
                  <div className="free">Available Today</div>
                  <div>
                      <button className="book-btn" onClick={handleButton}>Book FREE visit center</button>
                  </div>
              </div>
              
          </div>
          {activeHospitalIndex === index && (
              <div className="dates-container">
                  <Dates slotsON={true} slotClick={dayselect} day={day} />
                
                  <TabPanel 
                  time={time}
                  slotClick={timeselect}
                  slotday={day}
                  value={index}
                  index={index}
                  />

              </div>
          )}
          </div> 
      ));
}

export default HospitalCard;


