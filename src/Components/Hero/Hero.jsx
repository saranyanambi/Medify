import "./Hero.css";
import Heroimg from "../../assests/Hero.png";
import { Link } from 'react-router-dom';
import Doctorimg from "../../assests/Doctor.png";
import Drugstoreimg from "../../assests/Drugstore.png";
import Capsuleimg from "../../assests/Capsule.png";
import Ambulanceimg from "../../assests/Ambulance.png";
import Hospitalimg from "../../assests/Hospital.png"
import Searchbar from "../Searchbar/Searchbar";

const Hero=()=>{
    return(
        <div>
        <div className="hero-container">
            <div className="hero-left">
                <p className="herofirstline">Skip the travel! Find Online Medical Centers</p>
                <h1 className="herohead">Medical <span>Centers</span></h1>
                <p className="headlast">Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
                <Link to="/Find"><button className="herobutton">Find Centers</button></Link>
            </div>
            <div className="hero-right">
                <img src={Heroimg}/>
            </div>
        </div>
        {/* <div class="hero-search">
            <Searchbar/>
            <h3>You May be Looking For</h3>
        <div className="card-container">
            <div className="card-img-container">
            <div className="card">
                <img src={Doctorimg}/>
                <p>Doctor</p>
            </div>
            </div>

            <div className="card-img-container">
            <div className="card">
                <img src={Drugstoreimg}/>
                <p>Labs</p>
            </div>
            </div>

            <div className="card-img-container">
            <div className="card">
                <img src={Hospitalimg}/>
                <p>Hospital</p>
            </div>
            </div>

            <div className="card-img-container">
            <div className="card">
                <img src={Capsuleimg}/>
                <p>Medical Store</p>
            </div>
            </div>

            <div className="card-img-container">
            <div className="card">
                <img src={Ambulanceimg}/>
                <p>Ambulance</p>
            </div>
            </div>

        </div> 
        </div>*/}
        </div>
    )
}
export default Hero;