import React, {useRef} from 'react';
import './AI.css';
import {Typography, TypographyHeader} from '../../assets/typography';
import {theme} from '../../assets/theme';
import Slider from 'react-slick';

import Arrow from '../../assets/img/arrow.svg';

export const AI = () => {
  const sliderRef1 = useRef<Slider>(null);
  const sliderRef2 = useRef<Slider>(null);

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    draggable: true,
    infinite: true,
    cssEase: 'linear',
    speed: 1000,
  };

  const imagesTopSlider: string[] = [
    'AI1-1.png',
    'AI1-2.png',
    'AI1-3.png',
    'AI1-4.png',
    'AI1-1.png',
    'AI1-2.png',
    'AI1-3.png',
    'AI1-4.png',
  ];

  const imagesBottomSlider: string[] = [
    'AI2-1.png',
    'AI2-2.png',
    'AI2-3.png',
    'AI2-4.png',
    'AI2-1.png',
    'AI2-2.png',
    'AI2-3.png',
    'AI2-4.png',
  ];

  const handleButtonClickLeft = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickPrev();
    }

    if (sliderRef2.current) {
      sliderRef2.current.slickPrev();
    }
  };

  const handleButtonClickRight = () => {
    if (sliderRef1.current) {
      sliderRef1.current.slickNext();
    }

    if (sliderRef2.current) {
      sliderRef2.current.slickNext();
    }
  };

  return (
    <div style={{position: 'relative', zIndex: 1}}>
      <div className="containerAI" id="AI">
        <div
          style={{
            paddingTop: '75px',
            margin: '0 10%',
          }}>
          <div className="introAI">
            <div className="titleAIcontainer">
              <TypographyHeader
                className="titleAI"
                style={{
                  fontSize: '250px',
                }}>
                AI
              </TypographyHeader>
            </div>
            <Typography
              className="descriptionAI"
              style={{
                color: theme.text.main,
                fontSize: '25px',
              }}>
              Lately I dived into new tools where I transform text into
              captivating and unique visuals with AI magic.
            </Typography>
            <img
              className="logo1"
              src={require('../../assets/img/Firefly FM1.png')}
              alt="Firefly FM1.png"
            />
            <img
              className="logo2"
              src={require('../../assets/img/Firefly FM2.png')}
              alt="Firefly FM2.png"
            />
          </div>
          <div className="slidersContainerAI">
            <Slider {...settings} ref={sliderRef1}>
              {imagesTopSlider.map((image, index) => (
                <div className="sliderItemContainerAI">
                  <img
                    key={index}
                    className="sliderItemAI"
                    src={require(`../../assets/img/AI/${image}`)}
                    alt={image}
                  />
                </div>
              ))}
            </Slider>
            <Slider {...settings} ref={sliderRef2}>
              {imagesBottomSlider.map((image, index) => (
                <div className="sliderItemContainerAI">
                  <img
                    key={index}
                    className="sliderItemAI"
                    src={require(`../../assets/img/AI/${image}`)}
                    alt={image}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="buttonsContainerAI">
            <button className="buttonAI" onClick={handleButtonClickLeft}>
              <img className="arrowLeftAI" src={Arrow} alt="arrow.png" />
            </button>
            <button className="buttonAI" onClick={handleButtonClickRight}>
              <img className="arrowAI" src={Arrow} alt="arrow.png" />
            </button>
          </div>
        </div>
      </div>
      <div className="circleBlur" />
    </div>
  );
};
