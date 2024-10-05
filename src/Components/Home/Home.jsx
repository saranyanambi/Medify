import React from "react"
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import CardAds from "../CardAds/CardAds";
import Specialization from "../Specialization/Specialization";
import Specialist from "../Specialist/Specialist";
import ParentCaring from "../ParenCaring/ParentCaring";
import Blogs from "../Blogs/Blogs";
import Family from "../Family/Family";
import FAQ from "../FAQ/FAQ";
import FooterTop from "../FooterTop/FooterTop";
import MainFooter from "../Footer/Footer";
const Home=()=>{
    return(
        <>
        <Navbar/>
        <Hero/>
        <CardAds type="offer"/>
        <Specialization/>
        <CardAds type="specialist"/>
        <ParentCaring/>
        <Blogs/>
        <Family/>
        <FAQ/>
        <FooterTop/>
        <MainFooter/>
        </>
    )
}

export default Home;