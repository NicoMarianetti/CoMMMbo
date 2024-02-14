import React from 'react';
import './FeatureProjects.css';
import {Typography} from '../../assets/typography';
import {theme} from '../../assets/theme';
import Slider from 'react-slick';

export const FeatureProjects = () => {
  const posters: string[] = ['BaiBaiProject.png', 'VirtualDotProject.png'];

  const proyectsTitleStyles = {
    fontSize: '60px',
    fontWeight: '700',
    color: theme.text.main,
    marginBottom: '0px',
  };

  const settings = {
    infinite: false,
    speed: 300,
    arrows: false,
    focusOnSelect: false,
    autoplay: true,
    centerMode: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="featuredProjects">
      <Typography style={proyectsTitleStyles}>FEATURED PROJECTS</Typography>
      <Slider className="logoSlider" {...settings}>
        {posters.map((poster, index) => (
          <div className="logoContainer">
            <img
              key={index}
              src={require(`../../assets/img/${poster}`)}
              alt={poster}
              className="logo"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
