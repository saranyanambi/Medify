
// import "./Searchbar.css";
// import location from "../../assests/Location marker.png";
// import searchIcon from "../../assests/searchIcon.png";

// const Searchbar = () => {
//     return (
//         <div className="searchbar-container">
//         <div className="searchbar">
//             <form>
//                 <div className="searchbar-container">
//                     <div className="input-container">
//                         <div className="icon-input-wrapper">
//                         <img src={location} alt="Location" className="location-icon"/>
//                         <input type="text" name="state" placeholder="State" className="input-box"/>
//                         </div>
//                     </div>

//                     <div className="input-container">
//                     <div className="icon-input-wrapper">
//                         <img src={location} alt="Location" className="location-icon"/>
//                         <input type="text" name="city" placeholder="City" className="input-box"/>
//                         </div>
//                     </div>
                    
//                     <button className="search-btn"><img src={searchIcon}/>Search</button>
//                 </div>
//             </form>
//         </div>
//         </div>
//     );
// }

// export default Searchbar;




// import React, { useState, useEffect } from 'react';
// import "./Searchbar.css";
// import location from "../../assests/Location marker.png";
// import searchIcon from "../../assests/searchIcon.png";
// import axios from "axios";
// import HospitalList from '../FindHospitalsList/HospitalList';

// const Searchbar = () => {
//     const [stateInput, setStateInput] = useState('');
//     const [cityInput, setCityInput] = useState('');
//     const [states, setStates] = useState([]);
//     const [cities, setCities] = useState([]);
//     const [suggestedStates, setSuggestedStates] = useState([]);
//     const [suggestedCities, setSuggestedCities] = useState([]);
//     const [totalhospital,setTotalhospital]=useState([]);

//     // Fetch states when component mounts
//     useEffect(() => {
//         fetchStates();
//     }, []);


    



//     const fetchStates = async () => {
//         const response = await axios.get("https://meddata-backend.onrender.com/states");
        
//         setStates(response.data);
//     };

//     const fetchCities = async (state) => {
//         const response = await axios.get(`https://meddata-backend.onrender.com/cities/${state}`);
//         setCities(response.data);
//     };

//     const handleStateChange = (e) => {
//         const value = e.target.value;
//         console.log(value)
//         setStateInput(value);
//        const filteredStates = states.filter(state => state.toLowerCase().includes(value.toLowerCase()));
//        setSuggestedStates(filteredStates);
//     };

//     const handleCityChange = (e) => {
//         const value = e.target.value;
//         console.log(value)
//         setCityInput(value);
//         const filteredCities = cities.filter(city => city.toLowerCase().includes(value.toLowerCase()));
//         console.log(filteredCities)
//         setSuggestedCities(filteredCities);
//     };

//     const handleStateSelect = (state) => {
//         setStateInput(state);
//         setSuggestedStates([]);
//         fetchCities(state);
//     };

//     // useEffect=(()=>{
//     //     handleStateChange();
//     // },[stateInput])

//     const handleCitySelect = (city) => {
//         console.log(city)
//         setCityInput(city);
//         setSuggestedCities([]);
//     };


//     const handleSearch = async(e) => {
//         e.preventDefault();
        

//         try {
//             const res = await axios.get(`https://meddata-backend.onrender.com/data?state=${stateInput}&city=${cityInput}`);
//             setTotalhospital(res.data);
//         } catch (error) {
//             console.error("Error fetching hospitals:", error);
//         }

//     };

//     return (
//         <div className="search-bar-total-container">
//         <div className="searchbar-container">
//             <div className="searchbar">
//                 <form onSubmit={handleSearch}>
//                     <div className="searchbar-container">
//                         <div className="input-container">
//                             <div className="icon-input-wrapper">
//                                 <img src={location} alt="Location" className="location-icon"/>
//                                 <input 
//                                     type="text" 
//                                     name="state" 
//                                     placeholder="State" 
//                                     className="input-box"
//                                     value={stateInput}
//                                     onChange={handleStateChange}
//                                 />
//                             </div>
//                             {suggestedStates.length > 0 && (
//                                 <ul className="suggestions-list">
//                                     {suggestedStates.map((state, index) => (
//                                         <li key={index} onClick={() => handleStateSelect(state)}>
//                                             {state}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </div>

//                         <div className="input-container">
//                             <div className="icon-input-wrapper">
//                                 <img src={location} alt="Location" className="location-icon"/>
//                                 <input 
//                                     type="text" 
//                                     name="city" 
//                                     placeholder="City" 
//                                     className="input-box"
//                                     value={cityInput}
//                                     onChange={(e)=>handleCityChange(e)}
//                                 />
//                             </div>
//                             {suggestedCities.length > 0 && (
//                                 <ul className="suggestions-list">
//                                     {suggestedCities.map((city, index) => (
//                                         <li key={index} onClick={() => handleCitySelect(city)}>
//                                             {city}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </div>

//                         <button className="search-btn">
//                             <img src={searchIcon} alt="Search Icon"/>Search
//                         </button>
//                     </div>
//                 </form>
//             </div>
//             </div>
//            {totalhospital.length > 0 && <HospitalList totalhospital={totalhospital} />}
//         </div>
//     );
// }

// export default Searchbar;



import React, { useState, useEffect } from 'react';
import "./Searchbar.css";
import location from "../../assests/Location marker.png";
import searchIcon from "../../assests/searchIcon.png";
import axios from "axios";
import HospitalList from '../FindHospitalsList/HospitalList';
import { useNavigate } from 'react-router-dom';
const Searchbar = ({heroSearch}) => {
    const [stateInput, setStateInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [suggestedStates, setSuggestedStates] = useState([]);
    const [suggestedCities, setSuggestedCities] = useState([]);
    const [totalhospital, setTotalhospital] = useState([]);
    const navigate=useNavigate();    
    // Fetch states when component mounts
    useEffect(() => {
        const fetchStates = async () => {
            try {
                const response = await axios.get("https://meddata-backend.onrender.com/states");
                setStates(response.data);
            } catch (error) {
                console.error("Error fetching states:", error);
            }
        };

        fetchStates();
    }, []);

    const fetchCities = async (state) => {
        try {
            const response = await axios.get(`https://meddata-backend.onrender.com/cities/${state}`);
            setCities(response.data);
        } catch (error) {
            console.error("Error fetching cities:", error);
        }
    };

    const handleStateChange = (e) => {
        if(heroSearch)
        {
            navigate("/Find");
        }

        else{
        const value = e.target.value;
        setStateInput(value);
        const filteredStates = states.filter(state => state.toLowerCase().includes(value.toLowerCase()));
        setSuggestedStates(filteredStates);
        }
    };

    const handleCityChange = (e) => {
        if(heroSearch)
            {
                navigate("/Find");
            }

            else{
        const value = e.target.value;
        setCityInput(value);
        const filteredCities = cities.filter(city => city.toLowerCase().includes(value.toLowerCase()));
        setSuggestedCities(filteredCities);
            }
    };

    const handleStateSelect = (state) => {
        setStateInput(state);
        setSuggestedStates([]);
        fetchCities(state);
    };

    const handleCitySelect = (city) => {
        setCityInput(city);
        setSuggestedCities([]);
    };

    const handleSearch = async (e) => {

        if(heroSearch)
            {
                navigate("/Find");
            }
            else{

            
        e.preventDefault();

        try {
            const res = await axios.get(`https://meddata-backend.onrender.com/data?state=${stateInput}&city=${cityInput}`);
            setTotalhospital(res.data);
        } catch (error) {
            console.error("Error fetching hospitals:", error);
        }
    }
    };

    return (
        <div className="search-bar-total-container">
            <div className="searchbar-container">
                <div className="searchbar">
                    <form onSubmit={handleSearch}>
                        <div className="searchbar-container">
                            <div className="input-container">
                                <div className="icon-input-wrapper">
                                    <img src={location} alt="Location" className="location-icon"/>
                                    <input 
                                        type="text" 
                                        name="state" 
                                        placeholder="State" 
                                        className="input-box"
                                        value={stateInput}
                                        onChange={handleStateChange}
                                        
                                    />
                                </div>
                                {suggestedStates.length > 0 && (
                                    <ul className="suggestions-list">
                                        {suggestedStates.map((state, index) => (
                                            <li key={index} onClick={() => handleStateSelect(state)}>
                                                {state}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <div className="input-container">
                                <div className="icon-input-wrapper">
                                    <img src={location} alt="Location" className="location-icon"/>
                                    <input 
                                        type="text" 
                                        name="city" 
                                        placeholder="City" 
                                        className="input-box"
                                        value={cityInput}
                                        onChange={handleCityChange}
                                    />
                                </div>
                                {suggestedCities.length > 0 && (
                                    <ul className="suggestions-list">
                                        {suggestedCities.map((city, index) => (
                                            <li key={index} onClick={() => handleCitySelect(city)}>
                                                {city}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <button className="search-btn">
                                <img src={searchIcon} alt="Search Icon"/>Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {totalhospital.length > 0 && <HospitalList totalhospital={totalhospital} />}
        </div>
    );
}

export default Searchbar;
