// Card.js

import React from 'react';


const Card = ({ cardId , heading , short , fullHeading , full }) => {
  const toggleDescription = () => {
    var fullDescription = document.querySelector(`#${cardId} .full-description`);
    var knowMoreBtn = document.querySelector(`#${cardId} .know-more-btn`);

    if (fullDescription.style.display === 'none') {
      fullDescription.style.display = 'block';
      knowMoreBtn.textContent = 'Show Less';
    } else {
      fullDescription.style.display = 'none';
      knowMoreBtn.textContent = 'Know More';
    }
  };

  return (
    <div className="card" id={cardId}>
    <div className="card-content">
      <h3>{heading}</h3>
      <p className="short-description">{short}</p>
      <div className="full-description" style={{ display: 'none' }}>
      <p className="full-heading">{fullHeading}</p>
        <ul>
          {full.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <button className="know-more-btn" onClick={toggleDescription}>
        More Details
      </button>
    </div>
  </div>
);
};

export default Card;