import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./Dates.css"; 
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { printFormattedDates } from "../DateData/Date";
import TabPanel from '../TabPanel/TabPanel';

const Slots = props => {
    const { slotsON, slotClick, dateTime } = props;

    console.log(slotsON,slotClick,dateTime)
    const [activeIndex, setActiveIndex] = useState(0);
    const dateArray = useRef(printFormattedDates());

    console.log(dateArray)
    console.log("dates");
    const handleSlideChange = (swiper) => {
        console.log("Slide changed to: ", swiper.activeIndex);
        setActiveIndex(swiper.activeIndex);
    };

    return (
        <div className={slotsON ? "slotsWrapper tabEnlarge" : "slotsWrapper tabShrink"}>
            <Swiper
                onSlideChange={handleSlideChange}
                spaceBetween={50}
                slidesPerView={3}
                modules={[Pagination,Navigation]}
                navigation
                
                className="mySwiper"
            >
                {dateArray.current.map((date, index) => (
                   
                    <SwiperSlide key={index}>
                       <button 
                            className="date-button" 
                            onClick={() => slotClick(date)} // Call slotClick with date and time
                        >
                            {date}
                        </button>
                       
                    </SwiperSlide>
                     
                 
                ))}
            </Swiper>
           
        </div>
    );
};


export default Slots;
