
import "./HospitalList.css";
import sensodyneimg from "../../assests/sensodyne.png";
import hospitalimg from "../../assests/findhospital.png";
import thumbs from "../../assests/thumbsup.png";
import Dates from "../Dates/Dates"; // Ensure this is the correct path
import { useEffect, useState } from "react";
import TabPanel from "../TabPanel/TabPanel";
import HospitalCard from "../HospitalCard/HospitalCard";

const HospitalList = ({ totalhospital }) => {

    if (!totalhospital) return null;

    const HospitallistSecond = "medical centers available in";
    const text = "Book appointments with minimum wait-time & verified doctor details";

    const displayHospital = () => {
        return(
        <HospitalCard totalhospital={totalhospital}/>)
    };

    return (
        <div className="hospital-list-container">
            <div className="hospital-lines">
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
        </div>
    );
};

export default HospitalList;
