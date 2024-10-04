import "./Hero.css";
import Heroimg from "../../assests/Hero.png";
import { Link } from 'react-router-dom';
const Hero=()=>{
    return(
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
    )
}
export default Hero;