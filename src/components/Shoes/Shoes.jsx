import React from "react";
import "./Shoes.css";


const Shoes = () => {
  return (
    <div>
      <div className="wrapperr">
        <div id="borderremove" className="card card--19 container-fluid">
          <div className="card__header card__header--19">
            {/* tag line with component */}
            
            <h1 id="headerTitle" className="card__title card__will-animate">
              Lets Connect ,Lets Share.
            </h1>

            <span className="card__subtitle card__will-animate">
              From the upper to the triple-density foam midsole, the
              Nike Air Zoom Structure 19 Men's Running Shoe offers plenty of
              support and the response you need for a smooth, stable ride that
              feels ultra fast.
            </span>

          </div>

          {/* for shoes image */}
          <div className="card__body">
            <img
              src="https://i.ibb.co/R0Y8T8r/nike19.png"
              alt="Nike 19"
              className="card__image card__will-animate"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Shoes;
