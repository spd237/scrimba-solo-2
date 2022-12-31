import React from "react";
import mainImg from "/images/fuji.png";
import locIcon from "../assets/loc-icon.svg";

export default function Travel(props) {
  return (
    <div className="travel-container">
      <img
        src={`/images/${props.imageUrl}`}
        alt="Mount Fuji"
        className="main-img"
      />
      <div className="travel-info">
        <div className="info-top">
          <img src={locIcon} alt="location-icon" className="loc-icon" />
          <span className="location">{props.location}</span>
          <a href={props.googleMapsUrl} className="link">
            View on Google Maps
          </a>
        </div>
        <h1>{props.title}</h1>
        <span className="travel-dates">
          {props.startDate} - {props.endDate}
        </span>
        <p className="travel-description">{props.description}</p>
      </div>
    </div>
  );
}
