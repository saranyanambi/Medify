import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Autoplay, Pagination, Navigation,Scrollbar } from 'swiper/modules';
import "./Dates.css"; 
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { printFormattedDates } from "../DateData/Date";
import TabPanel from '../TabPanel/TabPanel';

const Slots = props => {
    const { slotsON, slotClick } = props;

    

    console.log(slotsON,slotClick)
    const [activeIndex, setActiveIndex] = useState(0);
    const dateArray = useRef(printFormattedDates());

    
    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    };

    return (
     <div className={slotsON ? "slotsWrapper tabEnlarge" : "slotsWrapper tabShrink"}>
            <Swiper
                onSlideChange={handleSlideChange}
                spaceBetween={20}
                slidesPerView={3}
                modules={[Pagination,Navigation,Scrollbar]}
                navigation
                breakpoints={{
                    300:{
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
               
            >
                {dateArray.current.map((date, index) => (
                   
                    <SwiperSlide key={index}>
                       <button 
                            className="date-button" 
                            onClick={() => slotClick(date)} 
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
