import React from 'react';
//styles

//assets
// import facebookImg from "../../assests/facebook.png";


// import twitterImg from "../../assests/twitter.png";
// import youtubeImg from "../../assests/youtube.png";
// import pinterestImg from "../../assests/pintrest.png";

import facebookImg from "../../assests/facebook.png";
import twitterImg from "../../assests/twitter.png";
import youtubeImg from "../../assests/youtube.png";
import pinterestImg from "../../assests/pintrest.png";
import rightArrowImg from "../../assests/rightArrow.png";
// import rightArrowImg from "../../assets/rightArrow.svg";
import logo from "../../assests/logo.png";
import "./Footer.css";
//components


const copyrightText = "Copyright ©2023 Surya Nursing Home.com. All Rights Reserved";

const MainFooter = () => {
    //variables
    const links = ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"];
    
    //components
    const Icon = ({icon}) => <img src={icon} alt={`${icon} icon`} className='footerIcon' />

    //functions
    const displayLinks = () => {
        return links.map(item => {
            return (
                <a className='footerLink' href='#'>
                    <img src={rightArrowImg} alt='right arrow'/>
                    <span>{item}</span>
                </a>
            )
        })
    }
    return (
        <div className='MainFooter'>
            <div className='mainFooterBody'>
                <div className='footerIconsAndLogo'>
                <div className="logo">
                    
        
                    <button><img src={logo}/></button>
            
                    
                    <span className="logotext">Medify</span>
                
                    
                    </div>
                    <div className='footerIconWrapper'>
                        <Icon icon={facebookImg} />
                        <Icon icon={twitterImg} />
                        <Icon icon={youtubeImg} />
                        <Icon icon={pinterestImg} />
                    </div>
                </div>
                <div className='footerLinkWrapper'>
                    <div className='flooterLinksColumn'>{displayLinks()}</div>
                    <div className='flooterLinksColumn'>{displayLinks()}</div>
                    <div className='flooterLinksColumn'>{displayLinks()}</div>
                </div>
            </div>
            <div className='copyright'>
                {copyrightText}
            </div>
        </div>
    );
};

export default MainFooter;