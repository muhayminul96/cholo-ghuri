import React from "react";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      {/* <h1 className="fs-1 fw-bolder text-white bg-dark text-start py-2">
        Hello vai , apnar ki guide lagbe?
      </h1> */}
      <Banner></Banner>
      <Services></Services>
      <Faq></Faq>
    </div>
  );
};

export default Home;
