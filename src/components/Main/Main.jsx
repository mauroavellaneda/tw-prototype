import React from "react";
import "./Main.css";
import van from "../../images/yellow-van.png";
import cascade from "../../images/cascade.png";

const Main = () => {
  return (
    <div className="firstSection">
      <div className="firstDesc">
        <div>
          <h2>
            Travel planner <br />
            in your pocket
          </h2>
          <p>
            TravelWiser is a new platform connecting the travel community & all
            the functions you need from a travel app.
          </p>
          <div>
            <button>Find a destination</button>
            <button>Plan your trip</button>
          </div>
        </div>
      </div>
      <div className="firstImg">
        <div className="circleTop"></div>
        <div className="circleRight"></div>
        <div className="circleCenter"></div>
        <img src={van} />
      </div>
      <div className="secondImg">
        <img src={cascade} />
      </div>
      <div className="secondDesc">
        <div>
          <h2>Everything in one app</h2>
          <p>
            Including finding inspiration for next adventures, we help with
            planning and booking. After learning your travel interests and
            hobbies, our large data bank and clever AI is putting together the
            perfect trip.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
