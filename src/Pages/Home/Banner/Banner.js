import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/9gmbXp7/banner1.jpg
            "
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Best Tour Guide</h3>
            <p>I am the best guide of this town</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/PQzPdCP/banner2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Best security</h3>
            <p>I give best security that can help to improve your safety.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/hYrq9yC/banner3.jpg
            "
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Know Everywhere</h3>
            <p>Know everywhere that you wants to see.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
