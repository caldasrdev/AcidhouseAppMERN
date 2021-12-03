import React from "react";
import Carousel from 'react-bootstrap/Carousel';


import image1 from '../../components/assets/img/1 (10).jpeg';
import image2 from '../../components/assets/img/1 (17).jpeg';
import image3 from '../../components/assets/img/1 (3).jpeg';
import image4 from '../../components/assets/img/1 (22).jpeg';

const Banner = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 h-100"
          src={image1}
          alt="Acid House"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 h-100"
          src={image2}
          alt="Acid House"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 h-100"
          src={image3}
          alt="Acid House"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 h-100"
          src={image4}
          alt="Acid House"
        />
      </Carousel.Item>

    </Carousel>
  )
}

export default Banner;