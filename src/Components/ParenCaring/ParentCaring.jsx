import parent1 from "../../assests/parent1.png";
import parent2 from "../../assests/paren2.png";
import bluetick from "../../assests/buletick.png";
import phone from "../../assests/phone.png";
import "./ParentCaring.css";
const ParentCaring=()=>{
    return(
        <div className="parent-container">
            <div className="parent-img-total">
                <div className="parent-img-container">
                    <div className="parent-img image1"><img src={parent1}/></div>
                    <div className="parent-img image2"><img src={parent2}/></div>
                    <button className="parent-button">
                        <img src={phone}/>
                        <div className="parent-button-inner">
                            <div className="btn-text1">Free Counsultation</div>
                            <div className="btn-text2">Consultation with the best</div>
                            </div>
                    </button>
                </div>
            
            <div className="parent-text">
                    <div className="parent-first">HELPING PATIENTS FROM AROUND THE GLOBE!!</div>
                    <div className="parent-second">Patient <span>Caring</span></div>
                    <div className="parent-third">Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner.
                         We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</div>
                    <div className="parent-list">
                    <div className='listItem'><img src={bluetick} /><span>Stay Updated About Your Health</span></div>
                        <div className='listItem'><img src={bluetick} /><span>Check Your Results Online</span></div>
                        <div className='listItem'><img src={bluetick} /><span>Manage Your Appointments</span></div>
                    </div>
            </div>
            </div>
        </div>
    )
}
export default ParentCaring;