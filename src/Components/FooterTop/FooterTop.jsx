import arrow from "../../assests/arrowFooter.png";
import googleplay from "../../assests/google_play.png.png";
import appstore from "../../assests/apple_store.png.png";
import phonelayer from "../../assests/phonelayer.png";
import phonedisplay from "../../assests/phonedisplay.png"
import "./FooterTop.css";
const FooterTop=()=>{
    return(
        <div>
            <div className="footer-container">
            <div className="footer-left">
                {/* <div><img src={phonelayer}/></div> */}
                <div className="phone-layer"><img src={phonelayer}/></div>

                <div className="phone-layer-second"><img src={phonelayer}/></div>

                <div className="phone-display"><img src={phonedisplay}/></div>

                <div className="phone-display-second"><img src={phonedisplay}/></div>
                

            </div>
            <div className="footer-right-arrow">
            <div>
                <img src={arrow}/>
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
               
                <form >
                    <div className="form-container">
                        <div className="input-country">
                        <span className="country-code">+91</span>
                        <input type="number" placeholder="Enter the number"/>
                        </div>
                    
                    <button className="send-btn">send sms</button>
                    </div>
                </form>
                <div className="play-btn-container">
                <button className="play-btn">Google Play</button>
                <button className="play-btn">App store</button>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}
export default FooterTop;