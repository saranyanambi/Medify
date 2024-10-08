import React from 'react';
import { useState } from 'react';
import "./TabPanel.css"


const morningTimings = ["08:00", "08:30", "09:00", "09:30", "10:00"]
const afternoonTimings = ["13:00", "13:30", "14:00", "14:30", "15:00"]
const eveningTimings = ["18:00", "18:30", "19:00", "19:30", "20:00"]

const SlotSession = props => {
  
  const { type, timings, suffix, slotClick, slotDate, dateTime ,slotday} = props;
  
  const displayButtons = () => {
    console.log("buttond");
    return timings.map(item => {
      return <button className='slot-btn'  onClick={() => slotClick(slotday,item)}>{item}{suffix}</button>
    })
  }
  return (
    <div className='slotSession'>
      <span className='sessionType'>{type}</span>
      <span className='timeButtonsArray'>{displayButtons()}</span>
    </div>
  )
}



const TabPanel = props => {
    const { dateTime,slotClick,slotday,value,index} = props;
    const [selectedTimings, setSelectedTimings] = useState({}); // Use an object to track selected times by date

  const handleSlotClick = (slotDate, time) => {
    setSelectedTimings(prev => {
      const currentSelected = prev[slotDate] || []; // Get current selected times for this date
      return {
        ...prev,
        [slotDate]: [...currentSelected, time], // Add the new time for the specific date
      };
    });
    slotClick(time);
  };

  const filteredTimings = (timings, slotDate) => {
    const currentSelected = selectedTimings[slotDate] || [];
    return timings.filter(item => !currentSelected.includes(item));
  };


    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        
    
      >
        {value === index && (
          <>
            <SlotSession dateTime={dateTime}  slotClick={handleSlotClick} slotday={slotday}type="Morining" timings = {filteredTimings(morningTimings,slotday)} suffix="AM"/>
            <span className='slotDivider'></span>
            <SlotSession dateTime={dateTime}  slotClick={handleSlotClick} slotday={slotday} type="Afternoon" timings = {filteredTimings(afternoonTimings, slotday)} suffix="PM"/>
            <span className='slotDivider'></span>
            <SlotSession dateTime={dateTime}  slotClick={handleSlotClick} slotday={slotday} type="Evening" timings = {filteredTimings(eveningTimings,slotday)} suffix="PM"/>
          </>
        )}
      </div>
    );
};

export default TabPanel;


// // import React, { useEffect, useState } from 'react';
// // import "./TabPanel.css";

// // const morningTimings = ["08:00", "08:30", "09:00", "09:30", "10:00"];
// // const afternoonTimings = ["13:00", "13:30", "14:00", "14:30", "15:00"];
// // const eveningTimings = ["18:00", "18:30", "19:00", "19:30", "20:00"];

// // const SlotSession = ({ type, timings, slotClick, slotDate }) => {
// //     const displayButtons = () => {
// //         return timings.map(item => (
// //             <button key={item} className='slot-btn' onClick={() => slotClick(item)}>
// //                 {item}
// //             </button>
// //         ));
// //     };

// //     return (
// //         <div className='slotSession'>
// //             <span className='sessionType'>{type}</span>
// //             <span className='timeButtonsArray'>{displayButtons()}</span>
// //         </div>
// //     );
// // };

// // const TabPanel = ({ value, index, slotClick, slotday, hospitalId }) => {
// //     const [availableSlots, setAvailableSlots] = useState([]);

// //     useEffect(() => {
// //         const storedData = JSON.parse(localStorage.getItem('availableSlots')) || {};
// //         const slots = storedData[hospitalId]?.availableSlots[slotday] || [];
// //         setAvailableSlots(slots);
// //     }, [hospitalId, slotday]);

// //     const filteredTimings = (timings) => {
// //         return timings.filter(item => availableSlots.includes(item));
// //     };

// //     return (
// //         <div
// //             role="tabpanel"
// //             hidden={value !== index}
// //             id={`full-width-tabpanel-${index}`}
// //             aria-labelledby={`full-width-tab-${index}`}
// //         >
// //             {value === index && (
// //                 <>
// //                     <SlotSession
// //                         slotClick={slotClick}
// //                         slotDate={slotday}
// //                         type="Morning"
// //                         timings={filteredTimings(morningTimings)}
// //                     />
// //                     <span className='slotDivider'></span>
// //                     <SlotSession
// //                         slotClick={slotClick}
// //                         slotDate={slotday}
// //                         type="Afternoon"
// //                         timings={filteredTimings(afternoonTimings)}
// //                     />
// //                     <span className='slotDivider'></span>
// //                     <SlotSession
// //                         slotClick={slotClick}
// //                         slotDate={slotday}
// //                         type="Evening"
// //                         timings={filteredTimings(eveningTimings)}
// //                     />
// //                 </>
// //             )}
// //         </div>
// //     );
// // };

// // export default TabPanel;


// import React from 'react';
// import "./TabPanel.css";

// const morningTimings = ["08:00", "08:30", "09:00", "09:30", "10:00"];
// const afternoonTimings = ["13:00", "13:30", "14:00", "14:30", "15:00"];
// const eveningTimings = ["18:00", "18:30", "19:00", "19:30", "20:00"];

// const SlotSession = ({ type, timings, slotClick }) => {
//     return (
//         <div className='slotSession'>
//             <span className='sessionType'>{type}</span>
//             {timings.map(item => (
//                 <button key={item} className='slot-btn' onClick={() => slotClick(item)}>
//                     {item}
//                 </button>
//             ))}
//         </div>
//     );
// };

// const TabPanel = ({ value, index, slotClick, slotday, bookedSlots,id }) => {

//   console.log(slotday)
//   console.log(id);

   
//     const getAvailableSlots = (timings) => {
//         const booked = bookedSlots[id][slotday] || [];
//         return timings.filter(item => !booked.includes(item));
//     };

//     return (
//         <div role="tabpanel" hidden={value !== index}>
//             {value === index && (
//                 <>
//                     <SlotSession
//                         slotClick={slotClick}
//                         type="Morning"
//                         timings={getAvailableSlots(morningTimings)}
//                     />
//                     <span className='slotDivider'></span>
//                     <SlotSession
//                         slotClick={slotClick}
//                         type="Afternoon"
//                         timings={getAvailableSlots(afternoonTimings)}
//                     />
//                     <span className='slotDivider'></span>
//                     <SlotSession
//                         slotClick={slotClick}
//                         type="Evening"
//                         timings={getAvailableSlots(eveningTimings)}
//                     />
//                 </>
//             )}
//         </div>
//     );
// };

// export default TabPanel;



// import React from 'react';
// import "./TabPanel.css";

// const morningTimings = ["08:00", "08:30", "09:00", "09:30", "10:00"];
// const afternoonTimings = ["13:00", "13:30", "14:00", "14:30", "15:00"];
// const eveningTimings = ["18:00", "18:30", "19:00", "19:30", "20:00"];

// const SlotSession = ({ type, timings, slotClick }) => {
//     return (
//         <div className='slotSession'>
//             <span className='sessionType'>{type}</span>
//             {timings.map(item => (
//                 <button key={item} className='slot-btn' onClick={() => slotClick(item)}>
//                     {item}
//                 </button>
//             ))}
//         </div>
//     );
// };

// const TabPanel = ({ value, index, slotClick, slotday, bookedSlots, id }) => {
//     const getAvailableSlots = (timings) => {
//         const booked = bookedSlots[id] ? bookedSlots[id][slotday] || [] : [];
//         return timings.filter(item => !booked.includes(item));
//     };

//     return (
//         <div role="tabpanel" hidden={value !== index}>
//             {value === index && (
//                 <>
//                     <SlotSession
//                         slotClick={slotClick}
//                         type="Morning"
//                         timings={getAvailableSlots(morningTimings)}
//                     />
//                     <span className='slotDivider'></span>
//                     <SlotSession
//                         slotClick={slotClick}
//                         type="Afternoon"
//                         timings={getAvailableSlots(afternoonTimings)}
//                     />
//                     <span className='slotDivider'></span>
//                     <SlotSession
//                         slotClick={slotClick}
//                         type="Evening"
//                         timings={getAvailableSlots(eveningTimings)}
//                     />
//                 </>
//             )}
//         </div>
//     );
// };

// export default TabPanel;

