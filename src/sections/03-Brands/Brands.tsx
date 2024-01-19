import React from 'react';
import logo from '../../assets/img/testLogo.jpeg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Brands.css';

const fields: JSX.Element[] = [];
for (let i = 1; i <= 10; i++) {
  fields.push(<img className='logo' src={logo}/>);
}

export const Brands = () => {

  const settings = {
    infinite: true,
    slidesToShow: 6,
    speed: 300,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const logos = [];
  for (let i = 1; i <= 10; i++) {
    logos.push(<img key={i} className='logo' src={logo}/>);
  }


  return (
  <div id='brandMain' className='font-roboto'>
    <div className='brandTitle'>
      SOME OF THE BRANDS I CREATED
    </div>
      <Slider {...settings}>
        {logos}
      </Slider>
    </div>
  );
};
