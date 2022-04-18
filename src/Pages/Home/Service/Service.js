import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { id, picture, price, rating, name, about } = service;
  return (
    <div className="service-container">
      <img className="w-100" src={picture} alt="" />
      <div className="service-details">
        <h2 className="fs-3 fw-bold">{name}</h2>
        <p className="fs-4">
          {" "}
          Price {price} BDT <small>per Day</small>
        </p>
        <p>{about}</p>
        <button className="btn  fw-bold btn-success px-4 fs-4">Book Me</button>
      </div>
    </div>
  );
};

export default Service;
