import './FamilyCard.css';

const FamilyCard=({image,total,text})=>{
    return(
        <div>
                    <div className='FamilyCard'>
            <img src={image} alt=""/>
            <div className='total'>{total}</div>
            <div className='text'>{text}</div>
        </div>

        </div>
    )
}

export default FamilyCard;