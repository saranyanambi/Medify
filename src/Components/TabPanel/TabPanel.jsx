import React from 'react';
import { useState } from 'react';
import "./TabPanel.css"


const morningTimings = ["08:00", "08:30", "09:00", "09:30", "10:00"]
const afternoonTimings = ["13:00", "13:30", "14:00", "14:30", "15:00"]
const eveningTimings = ["18:00", "18:30", "19:00", "19:30", "20:00"]

const SlotSession = props => {
  
  const { type, timings, suffix, slotClick, slotDate, dateTime ,slotday} = props;
  
  const displayButtons = () => {
    return timings.map(item => {
      return <button className='slot-btn'  onClick={() => slotClick(slotday,item,suffix)}>{item}{suffix}</button>
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
    const [selectedTimings, setSelectedTimings] = useState({}); 

  const handleSlotClick = (slotDate, time,suffix) => {
    setSelectedTimings(prev => {
      const currentSelected = prev[slotDate] || []; 
      return {
        ...prev,
        [slotDate]: [...currentSelected, time], 
      };
    });
    time+=suffix;
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



