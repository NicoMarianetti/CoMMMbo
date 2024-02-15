import React, {useEffect, useRef, useState} from 'react';
import './Experience.css';
import {Typography, TypographyHeader} from '../../assets/typography';
import {theme} from '../../assets/theme';
import {widthPercentageToPX} from '../../utils/size';
import AnimatedNumber from 'react-animated-numbers';
import {Posters} from '../../components/Posters/Posters';

export const Experience = () => {
  const [hoveredPoster, setHoveredPoster] = useState<number>(-1);

  const [experience, setExperience] = useState<number>(15);
  const [brands, setBrands] = useState<number>(80);

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
    lineHeight: 1,
  };

  const experienceDescriptionStyle = {
    ...experienceTagStyle,
    fontSize: 15,
    fontWeight: 500,
    margin: 0,
    lineHeight: 1,
  };

  const posters: string[] = [
    'Superchicas Musicales Vol2 POSTER copia 1.png',
    'poster2.png',
    'poster space jam 2.png',
    'poster4.png',
    'poster5.png',
  ];

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const animatedNumberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = (prop: any) => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.5,
  //   };

  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         setExperience(15);
  //         setBrands(80);
  //       }
  //     });
  //   }, options);

  //   if (animatedNumberRef.current) {
  //     observer.observe(animatedNumberRef.current);
  //   }

  //   return () => {
  //     if (animatedNumberRef.current) {
  //       observer.unobserve(animatedNumberRef.current);
  //     }
  //   };
  // }, []);

  return (
    <div style={{marginBottom: '200px'}}>
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
              <AnimatedNumber
                animateToNumber={experience}
                transitions={index => ({
                  type: 'spring',
                  duration: 5,
                })}
                fontStyle={{
                  color: theme.text.main,
                  fontSize: 100,
                  fontWeight: 700,
                  margin: 0,
                  lineHeight: 1,
                }}
              />

              <div className="yearsExperienceDescription">
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
                +
              </TypographyHeader>

              <AnimatedNumber
                animateToNumber={brands}
                transitions={index => ({
                  type: 'spring',
                  duration: 5,
                })}
                fontStyle={{
                  color: theme.text.main,
                  fontSize: 100,
                  fontWeight: 700,
                  margin: 0,
                  lineHeight: 1,
                }}
              />

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
      </div>
      <Posters />
    </div>
  );
};
