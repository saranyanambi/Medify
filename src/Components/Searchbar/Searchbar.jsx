import "./Searchbar.css";
const Searchbar=()=>{
    return(
        <>
        <div className="searchbar">
        <form>
            <input type="text" placeholder="State" className="input-box"/>
            <input type="text" placeholder="City" className="input-box"/>
            <button className="search-btn">Search</button>
        </form>
        </div>
        </>
       
    )
}
export default Searchbar;