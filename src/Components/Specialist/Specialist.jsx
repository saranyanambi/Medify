


import "./Specialist.css";

const Specialist = ({ item ,index}) => { 
    const { name, specialization, image } = item; 

    return (
        <div className="specialist-container">
            <div className={`specialist-img ${index}`}>
                <img src={image} alt={name} />
            </div>
            <div className="specialist-name">{name}</div>
            <div className="specialist-category">{specialization}</div>
        </div>
    );
}

export default Specialist;
