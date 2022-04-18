import React from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const params = useParams();
  return (
    <div>
      <h1>
        {" "}
        you choose {params.serviceId} no option, Please Contract this number{" "}
      </h1>
      <h2>01..........67</h2>

    </div>
  );
};

export default Booking;
