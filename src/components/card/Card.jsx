import { useState } from 'react';
import "./Card.css";

const Card = ({ datum }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="card" onClick={handleShowPopup}>
        <div className="imgee">
          <img src={datum.image}></img>
        </div>
        <p className="wei">{datum.unit}</p>

        <p className="vegn">{datum.title}</p>
        <div className="fl">
          <p className="pri">{datum.price}</p>
          <img className="shop" src={datum.shop}></img>
          <img className="cart" src={datum.cart}></img>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <p>Selected {datum.title} worth {datum.price}</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
