import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setSevices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setSevices(data));
  }, []);
  return (
    <div id="services" className="my-4">
      <h1 clas className="mb-4">
        {" "}
        My All Services{" "}
      </h1>
      <div className="container">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
