import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import image1 from "../../assests/offer1.png";
import image2 from "../../assests/offer2.png";
import image3 from "../../assests/offer3.png";
import "./CardAds.css";
import Specialist from '../Specialist/Specialist';
import specialist1 from "../../assests/specialist1.png";
import specialist2 from "../../assests/specialist2.png";
import specialist3 from "../../assests/specialist3.png";
import specialist6 from "../../assests/specialist6.png";
import specialist7 from "../../assests/specialist7.png";

const CardAds=({type})=>{
console.log(type)
const slidesPerView = type === "offer" ? 3 : 4; 
    const specialistData=[
        {name: "Dr. Lesley Hull", specialization: "Medicine", image: specialist6},
        {name: "Dr. Ahmad Khan", specialization: "Neurologist", image: specialist1},
        {name: "Dr. Heena Sachdeva", specialization: "Orthopadics", image: specialist2},
        {name: "Dr. Ankur Sharma", specialization: "Medicine", image: specialist3},
        {name: "Dr. Ahmad Stevens", specialization: "Neurologist", image: specialist7},
        ]


    const displayOffer=()=>{
        return(
            <>
            {type==="offer"?(
            <>
            <SwiperSlide><img src={image1} alt="Offer 1" className='swiper-img'/></SwiperSlide>
            <SwiperSlide><img src={image2} alt="Offer 1" className='swiper-img'/></SwiperSlide>
            <SwiperSlide><img src={image3} alt="Offer 1" className='swiper-img'/></SwiperSlide>
            
            </>
            ):(
                specialistData.map((item,index)=>(
                <SwiperSlide key={index}>
                <Specialist item={item} index={index}/>
                </SwiperSlide>
                ))
            )}
            </>
        )
    }
    return(
        <div className='swiper-total'>
             {type === "specialist" ?<p className='specialist-head'>Our Medical Specialist</p> : null}
            <div className={`swiper-container ${type==="specialist" ? "swiper-specialist" :""}`}>
            <Swiper
           spaceBetween={10}
          slidesPerView={slidesPerView}
         
            loop={true}
            modules={[Autoplay,Pagination,Navigation]}
            pagination={{ clickable: true }}

            
            breakpoints={{
                200: {
                    slidesPerView: 1, // Show 1 slide on small screens
                },
                768: {
                    slidesPerView: type === "offer" ? 2 : 2, // Show 2 slides on medium screens
                },
                1024: { slidesPerView: slidesPerView }
            }}
            className="mySwiper"
            >
               {displayOffer()} 
            </Swiper>
        </div>
        </div>
    )
}
export default CardAds;