import React, { useState, useEffect } from "react";
import "./JokesCard.css";


function JokesCard(props) {
  const {
    item
  } = props;




  return (
    <div className="mine">
      <div className="jokes-card__body">
        <p className="jokes-card__content">{item.value}</p>
      </div>
      <div className="jokes-card__footer">
        {item.categories.length ? (
          <div className="jokes-card__category">{item.categories[0]}</div>
        ) : null}
      </div>
    </div>
  );
}

export default JokesCard;
