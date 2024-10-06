import "./HospitalList.css";
import sensodyneimg from "../../assests/sensodyne.png";
import hospitalimg from "../../assests/findhospital.png";
import thumbs from "../../assests/thumbsup.png";
const HospitalList=()=>{
    
const HospitallistFirst = "Search with State and City name for Hospitals above"
const HospitallistSecond = "medical centers available in";
const text = "Book appointments with minimum wait-time & verified doctor details";

    return(
        <div className="hospital-list-container">
            <div className="hospital-first">{HospitallistFirst}</div>
            <div className="hospital-first">{HospitallistSecond}</div>
            <div className="text">{text}</div>
          
           <div className="hospital-card-container">
            
            <div className="hospital-card">
                 <div className="hospital-img">
                    <img src={hospitalimg} alt="hospital-img"/>
                    </div> 
                    <div className="hospital-detail">
                       <div className="hospital-road">Fortis Hospital Richmond Road</div> 
                       <div className="hospital-address">
                       <div className="hospital-city">Banglore, Karnataka</div>
                       <div className="hospital-street">Smilessence Center for Advanced Dentistry + 1</div>
                       <div className="hospital-street">more</div>
                       </div>
                       <div className="fees">
                        <span className="free">FREE</span>
                        <span className="hospital-street">{`$${500}`}</span>
                        <span className="hospital-street">Consultation fee at clinic</span>
                       </div>
                       <div className="like">
                            <img src={thumbs} alt="thumbs"/>
                            <span>5</span>
                       </div>
                </div> 
                <div className="free-visit">
                    <div className="free">Available Today</div>
                    <div><button className="book-btn">Book FREE visit center</button></div>
                    </div> 
            </div>

            <div className="sensodyne"><img src={sensodyneimg}/></div>
            </div>
        </div>
    )
}
export default HospitalList;