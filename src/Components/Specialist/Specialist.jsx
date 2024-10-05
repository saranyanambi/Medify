// import specialist1 from "../../assests/specialist1.png";
// import specialist2 from "../../assests/specialist2.png";
// import specialist3 from "../../assests/specialist3.png";
// import specialist4 from "../../assests/specialist4.png";
// import specialist5 from "../../assests/specialist5.png";
// import "./Specialist.css";

// const Specialist=(item)=>{

//     const {name,specialization,image}=item

//     console.log(item)
//     // const specialistData=[
//     // {name: "Dr. Lesley Hull", specialization: "Medicine", image: specialist1},
//     // {name: "Dr. Ahmad Khan", specialization: "Neurologist", image: specialist2},
//     // {name: "Dr. Heena Sachdeva", specialization: "Orthopadics", image: specialist3},
//     // {name: "Dr. Ankur Sharma", specialization: "Orthopadics", image: specialist4},
//     // {name: "Dr. Ahmad Stevens", specialization: "Neurologist", image: specialist5},
//     // ]

//     return(
        
//         <div className="specialist-container">
//             <div className="specialist-img">
//                 <img src={item.image}/>
//             </div>
//             <div className="specialist-name">{item.name}</div>
//             <div className="specialist-category">{item.specialization}</div>
//         </div>
     
    
//     )
    

// }

// export default Specialist


import "./Specialist.css";

const Specialist = ({ item ,index}) => { // Destructure item from props
    const { name, specialization, image } = item; // Destructure properties

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
