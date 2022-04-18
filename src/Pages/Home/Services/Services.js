import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setSevices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setSevices(data));
  }, []);
  return (
    <div>
      <h1> My Services {services.length}</h1>
    </div>
  );
};

export default Services;
