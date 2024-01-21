import React, {useEffect, useState} from 'react';
import './Experience.css';
import {Typography, TypographyHeader} from '../../assets/typography';
import {theme} from '../../assets/theme';
import {widthPercentageToPX} from '../../utils/size';

export const Experience = () => {
  const tagStyle = {
    color: theme.text.main,
    fontSize: 30,
    margin: 3,
    fontWeight: 700,
  };

  const experienceTagStyle = {
    color: theme.text.main,
    fontSize: 13,
    marginBottom: 3,
    fontWeight: 300,
  };

  const experienceTagStyleRight = {
    ...experienceTagStyle,
    textDecoration: 'underline',
  };

  const experienceNumberStyle = {
    color: theme.text.main,
    fontSize: 100,
    fontWeight: 700,
    margin: 0,
  };

  const experienceDescriptionStyle = {
    ...experienceTagStyle,
    fontSize: 15,
    fontWeight: 500,
    margin: 0,
  };

  const posters: string[] = [
    'Superchicas Musicales Vol2 POSTER copia 1.png',
    'poster2.png',
    'poster space jam 2.png',
    'poster4.png',
    'poster5.png',
  ];

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = (prop: any) => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="containerExperience">
      <div className="tags">
        <TypographyHeader style={tagStyle}>
          . WEB DESIGN IN WEBFLOW . BRANDING . ART DIRECTION .
        </TypographyHeader>
        <TypographyHeader style={tagStyle}>
          . AI IMAGE GENERATION . LANDING PAGES . LOGO DESIGN .
        </TypographyHeader>
        <TypographyHeader style={tagStyle}>
          . ICONOGRAPHY . ILLUSTRATION . DIGITAL COLLAGE .
        </TypographyHeader>
      </div>
      <div className="experience">
        <div className="line"></div>
        <div className="leftExperience">
          <Typography style={experienceTagStyle}>webflow</Typography>
          <Typography style={experienceTagStyle}>figma</Typography>
          <Typography style={experienceTagStyle}>blender</Typography>
          <Typography style={experienceTagStyle}>firefly</Typography>
          <Typography style={experienceTagStyle}>photoshop</Typography>
          <Typography style={experienceTagStyle}>illustrator</Typography>
          <Typography style={experienceTagStyle}>indesign</Typography>
          <Typography style={experienceTagStyle}>lightroom</Typography>
        </div>
        <div className="middleExperience">
          <div className="yearsExperience">
            <TypographyHeader style={experienceNumberStyle}>
              15
            </TypographyHeader>
            <div
              className="yearsExperienceDescription"
              // style={{
              //   display: 'flex',
              //   flexDirection: 'column',
              //   justifyContent: 'start',
              //   alignItems: 'start',
              //   marginRight: widthPercentageToPX('5%'),
              // }}
            >
              <Typography
                style={{...experienceDescriptionStyle, marginBottom: 0}}>
                YEARS OF
              </Typography>
              <Typography style={experienceDescriptionStyle}>
                EXPERIENCE
              </Typography>
            </div>
          </div>
          <div className="brandsExperience">
            <TypographyHeader style={experienceNumberStyle}>
              +80
            </TypographyHeader>
            <div className="brandsExperienceDescription">
              <Typography
                style={{...experienceDescriptionStyle, marginBottom: 0}}>
                BRANDS
              </Typography>
              <Typography style={experienceDescriptionStyle}>
                CREATED
              </Typography>
            </div>
          </div>
        </div>
        <div className="rightExperience">
          <Typography style={experienceTagStyleRight}>english</Typography>
          <Typography style={experienceTagStyleRight}>spanish</Typography>
          <Typography style={experienceTagStyleRight}>{'     '}</Typography>
          <Typography style={experienceTagStyleRight}>freelance</Typography>
          <Typography style={experienceTagStyleRight}>{'     '}</Typography>
          <Typography style={experienceTagStyleRight}>berlin</Typography>
        </div>
      </div>
      <div className="posters">
        {posters.map((poster, index) => {
          return (
            <div
              // style={
              //   posters.length / 2 > index
              //     ? {
              //         marginRight: `${
              //           (Math.trunc(posters.length / 2) - index) * 100
              //         }px`,
              //       }
              //     : {
              //         marginLeft: `${
              //           (index - Math.trunc(posters.length / 2)) * 100
              //         }px`,
              //       }
              // }
              style={{
                top: '50%',
                left: `calc(50% - ${
                  Math.trunc(posters.length / 2) * windowWidth * 0.12
                }px)`,
                transform: 'translate(-50%, -50%)',
                marginLeft: `${index * windowWidth * 0.12}px`,
              }}
              className="posterContainer"
              key={index}>
              <img
                // style={{left: `${index * windowWidth * 0.15}px`}}

                src={require(`../../assets/img/${poster}`)}
                alt={`poster${index}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
