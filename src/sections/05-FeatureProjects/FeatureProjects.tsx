import React from 'react';
import './FeatureProjects.css';
import {Typography, TypographyHeader} from '../../assets/typography';
import {theme} from '../../assets/theme';
import Slider from 'react-slick';

type Poster = {
  title: string;
  tags: string[];
  img: string;
  url: string;
};

export const FeatureProjects = () => {
  const posters: Poster[] = [
    {
      img: 'VirtualDotProject.png',
      title: 'VIRTUAL DOT',
      tags: ['Branding', 'Web', 'Newsletter'],
      url: '',
    },
    {
      img: 'BaiBaiProject.png',
      title: 'BAI BAI',
      tags: ['Social Media', 'Branding'],
      url: '',
    },
  ];

  const proyectsTitleStyles = {
    fontSize: '60px',
    fontWeight: '700',
    color: theme.text.main,
    marginBottom: '0px',
  };

  const titleStyles = {
    fontSize: '100px',
    fontWeight: '700',
    color: theme.text.main,
    margin: 0,
    lineHeight: '1',
  };

  const tagStyles = {
    fontSize: '30px',
    color: theme.text.main,
    letterSpacing: '2px',
    margin: 0,
  };

  const numberPostStyle = {
    fontSize: '80px',
    fontWeight: '100',
    color: theme.text.main,
    margin: 0,
    letterSpacing: '2px',
  };

  const settings = {
    // infinite: true
    speed: 3000,
    // autoplay: true,
    arrows: false,
    focusOnSelect: false,
    slidesToShow: 1.9,
  };

  return (
    <div className="featuredProjects">
      <div className="titleProjects">
        <Typography style={proyectsTitleStyles}>FEATURED PROJECTS</Typography>
      </div>
      <Slider className="logoSlider" {...settings}>
        {posters.map((poster, index) => (
          <div className="logoContainerProjects">
            <img
              key={index}
              src={require(`../../assets/img/${poster.img}`)}
              alt={poster.title}
              className="logo"
            />

            <div className="infoProject">
              <TypographyHeader style={titleStyles}>
                {poster.title}
              </TypographyHeader>

              <div className="tagsProjects">
                {poster.tags.map((tag, index) => {
                  const isLastTag = index === poster.tags.length - 1;

                  if (!isLastTag) {
                    return (
                      <div className="pointTag">
                        <TypographyHeader style={tagStyles} key={index}>
                          {tag}
                        </TypographyHeader>
                        <TypographyHeader
                          style={tagStyles}
                          key={'point' + index}>
                          .
                        </TypographyHeader>
                      </div>
                    );
                  }

                  return (
                    <TypographyHeader style={tagStyles}>{tag}</TypographyHeader>
                  );
                })}
              </div>
            </div>

            <div className="numberProject">
              <Typography style={numberPostStyle}>{`00${
                index + 1
              }_`}</Typography>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
