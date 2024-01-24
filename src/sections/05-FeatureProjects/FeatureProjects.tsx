import React from 'react';
import './FeatureProjects.css';

export const FeatureProjects = () => {
  const posters: string[] = [
    'BaiBaiProject.png',
    'VirtualDotProject.png'
  ];

  const settings = {
    infinite: false,
    speed: 300,
    arrows: false,
    focusOnSelect: true,
    autoplay: true,
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
    // <div>TEST</div>S
  <div className='featuredProjects font-roboto'>
    <div className='featuredProjectsTitle'>
      FEATURED PROJECTS
    </div>
    <div className='logoContainer'>
      {/* Ver por que se ve 1 y medio */}
      {posters.map((poster, index) => (
          <img
            key={index}
            src={require(`../../assets/img/${poster}`)}
            alt={poster}
            className='logo'
          />
        ))}
    </div>
    
  </div>
  );
};
