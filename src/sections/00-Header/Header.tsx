import {useState} from 'react';
import {theme} from '../../assets/theme';
import {Typography, TypographyHeader} from '../../assets/typography';
import './Header.css';
import React from 'react';

export const Header = () => {
  const [hoveredText, setHoveredText] = useState<string>('');

  const handleMouseEnter = (text: string) => {
    setHoveredText(text);
  };

  const handleMouseLeave = () => {
    setHoveredText('');
  };

  const isTextHovered = (text: string) => {
    return text === hoveredText;
  };

  const getTextStyles = (text: string) => {
    return {
      color: isTextHovered(text) ? theme.text.main + 'aa' : theme.text.main,
      fontSize: '15px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'color 0.3s',
    };
  };

  const handleTextClick = (text: string) => {
    const section = document.getElementById(text);
    if (section) {
      section.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <div className="containerHeader">
      <div className="intermediateContainer">
        <div className="mainLogoContainer">
          <img
            className="mainLogo"
            src={require('../../assets/img/FM0.png')}
            alt="logo"
          />
        </div>
        <div></div>
        <div className="redirectsContainer">
          <TypographyHeader
            style={getTextStyles('About')}
            onMouseEnter={() => handleMouseEnter('About')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleTextClick('about')}
            className="headersSections">
            About
          </TypographyHeader>
          <TypographyHeader
            style={getTextStyles('Services')}
            onMouseEnter={() => handleMouseEnter('Services')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleTextClick('services')}
            className="headersSections">
            Services
          </TypographyHeader>
          <TypographyHeader
            style={getTextStyles('Projects')}
            onMouseEnter={() => handleMouseEnter('Projects')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleTextClick('projects')}
            className="headersSections">
            Projects
          </TypographyHeader>
          <div className="verticalLine" />
          <TypographyHeader
            style={getTextStyles('Contact')}
            onMouseEnter={() => handleMouseEnter('Contact')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleTextClick('AI')}
            className="headersSections">
            Contact
          </TypographyHeader>
        </div>
      </div>
    </div>
  );
};
