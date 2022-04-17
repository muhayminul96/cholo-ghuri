import React from "react";

const Footer = () => {
  return (
    <div>
      <p className="text-dark mt-5 ">
        {" "}
        &copy; Cholo Ghuri {new Date().getFullYear()}{" "}
      </p>
    </div>
  );
};

export default Footer;
