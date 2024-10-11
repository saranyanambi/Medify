
import "../FindHospitalsList/HospitalList.css";
import hospitalimg from "../../assests/findhospital.png";
import thumbs from "../../assests/thumbsup.png";
import Dates from "../Dates/Dates"; 
import { useEffect, useState } from "react";
import TabPanel from "../TabPanel/TabPanel";
import tick from "../../assests/tick.png";

const HospitalCard = ({ totalhospital }) => {
    const [datesVisible, setDatesVisible] = useState(false);
    const [day, setDay] = useState("");
    const [time, setTime] = useState("");
    const [hospitalInfo, setHospitalInfo] = useState({});
    const [booked, setBooked] = useState({});
    const [activeHospitalIndex, setActiveHospitalIndex] = useState(null);

 
    useEffect(() => {
        const localBookings = JSON.parse(localStorage.getItem("bookings")) || [];
        const bookedMap = {};
        localBookings.forEach(element => {
            bookedMap[element.hospitalInfo.id] = true;
        });
        setBooked(bookedMap);
    }, []);

    useEffect(() => {
        console.log("datesVisible changed to:", datesVisible);
    }, [datesVisible]);

    if (!totalhospital) return null;

    const handleClick = (item, index) => {
        console.log("click")
        setActiveHospitalIndex(index);
        setDatesVisible(true);

        console.log(datesVisible);
        setHospitalInfo({
            hospitalName: item["Hospital Name"],
            city: item["City"],
            county: item["State"],
            rating: item["Hospital overall rating"],
            hospitalType: item["Hospital Type"],
            id: item["Provider ID"]
        });
    };

    const handleButton = (event) => {
        event.stopPropagation();
        if (!day || !time) {
            return alert("Select Slot Date and Time to book.");
        }

        console.log("Before booking - datesVisible:", datesVisible);

        const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
        const newBooking = { day, time, hospitalInfo };

      
        const isBookingExists = existingBookings.some(booking => 
            booking.hospitalInfo.id === hospitalInfo.id && 
            booking.day === day && 
            booking.time === time
        );

        if (isBookingExists) {
            return alert("This time is already booked for the selected day.");
        }

       
        existingBookings.push(newBooking);
        localStorage.setItem("bookings", JSON.stringify(existingBookings));

       
        setBooked(prev => ({ ...prev, [hospitalInfo.id]: true }));

        alert("New Booking Created!");

     
        setDatesVisible(false);
        setDay("");
        setTime("");
        setActiveHospitalIndex(null);

        console.log("Before booking - datesVisible:", datesVisible);
    };

    const dayselect = (day) => {
        setDay(day);
    };

    const timeselect = (time) => {
        setTime(time);
    };

    return totalhospital.map((item, index) => (
        <div className="hospital-card-date" key={item["Provider ID"]} onClick={() => handleClick(item, index)}>
            <div className="hospital-card" onClick={() => handleClick(item, index)}>
                <div className="hospital-img">
                    <img src={hospitalimg} alt="hospital-img" />
                    {booked[item["Provider ID"]] && (
                        <div className="tick-img">
                            <img src={tick} alt="tick" />
                        </div>
                    )}
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
            {activeHospitalIndex === index && datesVisible && (
                <div className="dates-container">
                    <Dates slotsON={datesVisible} slotClick={dayselect} />
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
};

export default HospitalCard;

