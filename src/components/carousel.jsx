import '../App.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './imgs/spiderlogo.jpg'
import img2 from './imgs/spiderlogo.jpg'
import img3 from './imgs/spiderlogo.jpg'
import img4 from './imgs/spiderlogo.jpg'
import img5 from './imgs/spiderlogo.jpg'
import img10 from './imgs/spiderlogo.jpg'
import img12 from './imgs/spiderlogo.jpg'
import img13 from './imgs/spiderlogo.jpg'
import img14 from './imgs/spiderlogo.jpg'
import img15 from './imgs/spiderlogo.jpg'

const CarouselComponent = () => {
  return (
    <div className='carousel_container'>
    <Carousel className='carousel' interval={2000}>
    <Carousel.Item>
      <img
        className="d-block"
        src={img1}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img2}
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img3}
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img4}
        alt="Fourth slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img5}
        alt="Fifth slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img15}
        alt="Fifteenth slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img10}
        alt="Tenth slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img12}
        alt="Twelfth slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img13}
        alt="Thirteenth slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block"
        src={img14}
        alt="Fourteenth slide"
      />
    </Carousel.Item>
    
  </Carousel>
  </div>
  );
};

export default CarouselComponent;