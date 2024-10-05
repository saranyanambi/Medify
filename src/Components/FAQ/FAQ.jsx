import faqimage from "../../assests/faqimage.png";
import smile from "../../assests/smile.png";
import cheer from "../../assests/cheers.png";
import plus from "../../assests/plus.png";
import "./FAQ.css";
const FAQ=()=>{
    return(
        <div>
            <div className="faq-first">Get Your Answer</div>
            <div className="faq-second">Frequently Asked Questions</div>
            <div className="faq-container">
                <div className="faq-left-container">
                   
                    <div className="side-img-container">
                        <button className="smile">
                            <div><img src={smile}/></div>
                            <div className="smile-inner">
                                <div className="smile-inner-first">
                                    84K+
                                </div>
                                <span className="smile-inner-second">
                                    HappyParents
                                </span>
                            </div>
                        </button>
                    
                    <img src={cheer} className="cheer"/>
                    </div>
                </div>
                <div className="faq-right-container">
                    <div className="faq-right">
                        <span>Why choose our medical for your family?</span>
                        <img src={plus}/>

                    </div>
                    <div className="faq-right">
                        <span>Why we are different from others?</span>
                        <img src={plus}/>
                    </div>
                    <div className="faq-right">
                        <span>Trusted & experience senior care & love</span>
                        <img src={plus}/>
                    </div>
                    <div className="faq-right">
                        <span>How to get appointment for emergency</span>
                        <img src={plus}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FAQ;