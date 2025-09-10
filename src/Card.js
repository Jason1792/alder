import "./Card.css";
const Card = ({ field_01, field_02, field_03, field_04, field_05, field_06, field_07, onCardClick }) => {

return (
        <div className="card" onClick={onCardClick} >
                <div className="card-text">
                        <h3 className="card-field_02">{field_02 || ''}</h3>
                        <p className="card-field_03">{field_03 || ''}</p>
                        <p className="card-field_04">{field_04 || ''}</p>
                        <p className="card-field_05">{field_05 || ''}</p>
                        <p className="card-field_06">{field_06 || ''}</p>
                        <p className="card-field_07">{field_07 || ''}</p>
                </div>
        </div>
);
}

export default Card;