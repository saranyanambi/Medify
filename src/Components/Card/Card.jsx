import "./Card.css";
const Card=props=>{
    const { image, text, customStyle, cardClass } = props;
    return(
        <div className={`Card ${customStyle} ${cardClass}`}>
            <img src={image} className="card-img"/>
            <span className="card-text">{text}</span>
        </div>
    )

}
export default Card;