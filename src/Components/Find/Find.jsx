import FooterTop from "../FooterTop/FooterTop";
import Navbar from "../Navbar/Navbar"
import MainFooter from "../Footer/Footer";
import FAQ from "../FAQ/FAQ";
import HospitalList from "../FindHospitalsList/HospitalList";
import Searchbar from "../Searchbar/Searchbar";
const Find=()=>{
    return(
        <>
        <Navbar/>
        <Searchbar/>
        <HospitalList/>
        <FAQ/>
        <FooterTop/>
        <MainFooter/>
        </>
    )
}

export default Find;