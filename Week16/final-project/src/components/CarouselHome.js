import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import One from '../images/1.jpg'
import Two from '../images/2.jpg'
import Three from '../images/3.jpg'

export default function CarouselHome() {
  return (
      <Carousel fade> 
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={One}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Two}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Three}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
  );
}
