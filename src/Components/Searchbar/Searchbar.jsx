
import "./Searchbar.css";
import location from "../../assests/Location marker.png";
import searchIcon from "../../assests/searchIcon.png";

const Searchbar = () => {
    return (
        <div className="searchbar-container">
        <div className="searchbar">
            <form>
                <div className="searchbar-container">
                    <div className="input-container">
                        <div className="icon-input-wrapper">
                        <img src={location} alt="Location" className="location-icon"/>
                        <input type="text" placeholder="State" className="input-box"/>
                        </div>
                    </div>

                    <div className="input-container">
                    <div className="icon-input-wrapper">
                        <img src={location} alt="Location" className="location-icon"/>
                        <input type="text" placeholder="City" className="input-box"/>
                        </div>
                    </div>
                    
                    <button className="search-btn"><img src={searchIcon}/>Search</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default Searchbar;
