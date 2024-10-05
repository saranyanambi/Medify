import arrow from "../../assests/arrowFooter.png";
import googleplay from "../../assests/google_play.png.png";
import appstore from "../../assests/apple_store.png.png";
import phonelayer from "../../assests/phonelayer.png";
import phonedisplay from "../../assests/phonelayer.png"
import "./FooterTop.css";
const FooterTop=()=>{
    return(
        <div>
            <div className="footer-container">
            <div className="footer-left">
                <div><img src={phonelayer}/></div>
                <div className="footer-image1"><img src={phonelayer}/></div>
                

            </div>
            <div className="footer-right">
                <div className="footer-first">
                    Download the
                </div>
                <div className="footer-first">
                   <span>Medify</span>  App
                </div>
                <div>
                Get the link to download the app
                </div>
                <image src={arrow}/>
                <form >
                    <div className="form-container">
                        <span>+91</span>
                        <input type="number" placeholder="Enter the number"/>
                    
                    <button className="send-btn">send sms</button>
                    </div>
                </form>
                <button><img src={googleplay}/></button>
                <button><img src={appstore}/></button>
            </div>
            </div>
        </div>
    )
}
export default FooterTop;