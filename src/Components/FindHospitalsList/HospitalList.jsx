// import "./HospitalList.css";
// import sensodyneimg from "../../assests/sensodyne.png";
// import hospitalimg from "../../assests/findhospital.png";
// import thumbs from "../../assests/thumbsup.png";
// import Dates from "../DateData/Date";
// import { useState } from "react";
// const HospitalList=({totalhospital})=>{
//     const [dates,setDates]=useState(false);
//     const [dateTime, setDateTime] = useState({date: "", time: ""});
//     if(!totalhospital)
//         return null;
  
// const HospitallistFirst = "Search with State and City name for Hospitals above"
// const HospitallistSecond = "medical centers available in";
// const text = "Book appointments with minimum wait-time & verified doctor details";
       

//         const handleclick=()=>{
//             setDates(prevDate => !prevDate);

//             setHospitalInfo({
//                 hospitalName: item["Hospital Name"],
//                 city: item["City"],
//                 county: item["State"], // Assuming "State" is considered as county in your context
//                 rating: item["Hospital overall rating"],
//                 hospitalType: item["Hospital Type"]
//             });
//         }    

//         const handlebutton = () => {
//             if (!dateTime.date.length || !dateTime.time.length) {
//                 return alert("Select Slot Date to book.");
//             }
    
//             const newBooking = { dateTime, data: hospitalInfo };
//             const saveBookings = [...bookings, newBooking];
    
//             // Save bookings to local storage
//             localStorage.setItem("bookings", JSON.stringify(saveBookings));
    
//             // Save to context or state
//             setBookings(saveBookings);
    
//             alert("New Booking Created!");
//         }


//         const displayhosplital=()=>{

//         if (!Array.isArray(totalhospital)) {
//             return null; 
//         }
//             return totalhospital.map((item)=>(
//                 <div className="hospital-card" onClick={handleclick(item)} key={item["Hospital Name"]}>
//                 <div className="hospital-img">
//                 <img src={hospitalimg} alt="hospital-img"/>
//                 </div>
//                 <div className="hospital-detail">
//                        <div className="hospital-road">{item["Hospital Name"]}</div> 
//                        <div className="hospital-address">
//                        <div className="hospital-city">{`${item["City"],item["State"]}`}</div>
//                        <div className="hospital-street">{item["Hospital Type"]}</div>
//                        <div className="hospital-street">more</div>
//                        </div>
//                        <div className="fees">
//                         <span className="free">FREE</span>
//                         <span className="hospital-street">{`$${500}`}</span>
//                         <span className="hospital-street">Consultation fee at clinic</span>
//                        </div>
//                        <div className="like">
//                             <img src={thumbs} alt="thumbs"/>
//                             {item["Hospital overall rating"]!="Not Available" &&<span>{item["Hospital overall rating"]}</span>}
//                        </div>
//                 </div>
//                  <div className="free-visit">
//                  <div className="free">Available Today</div>
//                  <div><button className="book-btn" onClick={handlebutton}>Book FREE visit center</button></div>
//                  </div> 
//                  </div>
//                 ))
            
//         }

//     return(
//         <div className="hospital-list-container">
//             <div className="hospital-lines">
//             <div className="hospital-first">{HospitallistFirst}</div>
//             <div className="hospital-first"> {`${totalhospital.length} ${HospitallistSecond}`}</div>
//             <div className="text">{text}</div>
//             </div>

            
//           <div className="hospita-total">

            
//            <div className="hospital-card-container">
//            {displayhosplital()} 
            
//             </div>

//             <div className="sensodyne"><img src={sensodyneimg}/></div>

//             </div>
//             <Dates slotOn={dates} />
//         </div>
//     )
// }
// export default HospitalList;

import "./HospitalList.css";
import sensodyneimg from "../../assests/sensodyne.png";
import hospitalimg from "../../assests/findhospital.png";
import thumbs from "../../assests/thumbsup.png";
import Dates from "../Dates/Dates"; // Ensure this is the correct path
import { useEffect, useState } from "react";
import TabPanel from "../TabPanel/TabPanel";
import HospitalCard from "../HospitalCard/HospitalCard";

const HospitalList = ({ totalhospital }) => {
    // const [datesVisible, setDatesVisible] = useState(false);
    // const [dateTime, setDateTime] = useState({});
    // const[day,setDay]=useState("");
    // const[time,setTime]=useState("");
    // const [hospitalInfo, setHospitalInfo] = useState({});
    // const [bookings, setBookings] = useState([]);
    // const [activeHospitalIndex, setActiveHospitalIndex] = useState(null);

    if (!totalhospital) return null;

    const HospitallistFirst = "Search with State and City name for Hospitals above";
    const HospitallistSecond = "medical centers available in";
    const text = "Book appointments with minimum wait-time & verified doctor details";

    // const handleClick = (item,index) => {
    //     // setDatesVisible(true); // Show the Dates component
    //     setActiveHospitalIndex(index);
    //     console.log(datesVisible)
    //     setHospitalInfo({
    //         hospitalName: item["Hospital Name"],
    //         city: item["City"],
    //         county: item["State"],
    //         rating: item["Hospital overall rating"],
    //         hospitalType: item["Hospital Type"]
    //     });
    // };

    // const handleButton = () => {
    //     if (!day.length || !time.length) {
    //         return alert("Select Slot Date to book.");
    //     }

    //     // console.log(hospitalInfo)

    //     // const newBooking = { dateTime, data: hospitalInfo,day:time };
    //     // console.log(newBooking)
    //     // console.log(dateTime)

    //     const newBooking = { day:time, data: hospitalInfo };

    //     console.log(newBooking)

    //     const updatedBookings = [...bookings, newBooking];

    //     console.log(updatedBookings)

    //     localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    //     // const saveBookings = [...bookings, newBooking];

    //     // // Save bookings to local storage
    //     // localStorage.setItem("bookings", JSON.stringify(saveBookings));
    //     // setBookings(saveBookings); // Update state with new bookings

    //     alert("New Booking Created!");
        
    // };

    // // const slotClick = (date, time) => {
       
    // //     setDay(day);
    // //     set
    // // };

    // const dayselect=(day)=>{
    //     setDay(day)
    //     console.log(day)
    // }

    // const timeselect=(time)=>{
    //     setTime(time);
    //     console.log(time)
    // }

    const displayHospital = () => {
        // return totalhospital.map((item,index) => (
        //   <div className="hospital-card-date"> 
        //     <div className="hospital-card" onClick={() => handleClick(item,index)} key={item["Hospital Name"]}>
        //         <div className="hospital-img">
        //             <img src={hospitalimg} alt="hospital-img" />
        //         </div>
        //         <div className="hospital-detail">
        //             <div className="hospital-road">{item["Hospital Name"]}</div>
        //             <div className="hospital-address">
        //                 <div className="hospital-city">{`${item["City"]}, ${item["State"]}`}</div>
        //                 <div className="hospital-street">{item["Hospital Type"]}</div>
        //                 <div className="hospital-street">more</div>
        //             </div>
        //             <div className="fees">
        //                 <span className="free">FREE</span>
        //                 <span className="hospital-street">{`$${500}`}</span>
        //                 <span className="hospital-street">Consultation fee at clinic</span>
        //             </div>
        //             <div className="like">
        //                 <img src={thumbs} alt="thumbs" />
        //                 {item["Hospital overall rating"] !== "Not Available" && (
        //                     <span>{item["Hospital overall rating"]}</span>
        //                 )}
        //             </div>
        //         </div>
        //         <div className="free-visit">
        //             <div className="free">Available Today</div>
        //             <div>
        //                 <button className="book-btn" onClick={handleButton}>Book FREE visit center</button>
        //             </div>
        //         </div>
                
        //     </div>
        //     {activeHospitalIndex === index && (
        //         <div className="dates-container">
        //             <Dates slotsON={true} slotClick={dayselect} day={day} />
                  
        //             <TabPanel 
        //             time={time}
        //             slotClick={timeselect}
        //             slotday={day}
        //             value={index}
        //             index={index}/>
        //         </div>
        //     )}
        //     </div> 
        // ));
        return(
        <HospitalCard totalhospital={totalhospital}/>)
    };

    return (
        <div className="hospital-list-container">
            <div className="hospital-lines">
                <div className="hospital-first">{HospitallistFirst}</div>
                <div className="hospital-first">{`${totalhospital.length} ${HospitallistSecond}`}</div>
                <div className="text">{text}</div>
            </div>

            <div className="hospita-total">
                <div className="hospital-card-container">
                    {displayHospital()}
                </div>
                <div className="sensodyne">
                    <img src={sensodyneimg} alt="Sensodyne" />
                </div>
            </div>

            {/* Render Dates component based on state */}
            {/* {datesVisible && (
                <Dates slotsON={datesVisible} slotClick={slotClick} dateTime={dateTime} />
            )} */}
              
        </div>
    );
};

export default HospitalList;
