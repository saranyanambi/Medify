import familyyellow from "../../assests/yellow.png";
import hand from "../../assests/hand.png";
import man from "../../assests/man.png";
import hos from "../../assests/hos.png";
import "./Family.css";
import FamilyCard from "../FamilyCard/FamilyCard";
const Family=()=>{
    const text="We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence."
    return(
        <div className="family-wrapper">
            <div className="family-container">
            <div className="family-text-container">
                <div className="family-first">CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</div>
                <div className="family-second">Our Families</div>
                <div className="family-text">{text}</div>
            </div>
            <div className="family-card-container">

                <div className="family-card-left-container">
                    <FamilyCard image={hand} total="5000+" text="Happy Patients"/>
                    <FamilyCard image={familyyellow} total="1000+" text="Happy Patients"/>
                </div>
                <div className="family-card-right-container">
                <FamilyCard image={hos} total="5000+" text="Happy Patients"/>
                <FamilyCard image={man} total="5000+" text="Happy Patients"/>
                </div>

            </div>
            </div>
        </div>
    )
}

export default Family;