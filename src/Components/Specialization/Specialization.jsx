import drugstore from "../../assests/Drugstore.png";
import Steththoscope from "../../assests/Stethoscope.png";
import xray from "../../assests/X-Ray.png";
import immune from "../../assests/Immune.png";
import heartrate from "../../assests/Heart Rate.png";
import heartratemonitor from "../../assests/Heart Rate Monitor.png";
import blood from "../../assests/Blood Sample.png";
import Card from "../Card/Card"
import "./Specialization.css";

const Specialization=()=>{

    const data=[
        {text: "Dentistry", image: drugstore},
        {text: "Primary Care", image: Steththoscope},
        {text: "Cardiology", image: heartrate},
        {text: "MRI Resonance", image: xray},
        {text: "Blood Test", image: blood},
        {text: "Piscologist", image: immune},
        {text: "Laboratory", image: drugstore},
        {text: "X-Ray", image: heartratemonitor},
    ]
    const displayCards = () => data.map(item => <Card cardClass="specializationCard" image={item.image} text={item.text} /> );

    return(
        <div className="specialization-container">
            <div className="specialization-card-container">
                <p className="header">Find By Specialization</p>
                <div className="specialization-card">
                    {displayCards()}
                </div>
                <button className="specialization-card-btn">View All</button>

            </div>

        </div>
    )

}

export default Specialization;