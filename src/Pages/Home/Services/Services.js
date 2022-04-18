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
    <div>
      <h1>  My All Services </h1>
        {
            services.map(service => <Service key={service.id} service={service}></Service>)
        }
    </div>
  );
};

export default Services;
