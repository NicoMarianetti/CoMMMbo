import {useState} from 'react';
import {theme} from '../../assets/theme';
import {Typography, TypographyHeader} from '../../assets/typography';
import './Header.css';

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

  const handleTextClick = (text: string) => {
    const section = document.getElementById(text);
    if (section) {
      section.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <div className="containerHeader">
      <TypographyHeader
        style={{
          color: isTextHovered('About') ? '#a178ea' : theme.text.main,
          fontSize: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
        onMouseEnter={() => handleMouseEnter('About')}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleTextClick('about')}
        className="headersSections">
        About
      </TypographyHeader>
      <TypographyHeader
        style={{
          color: isTextHovered('Services') ? '#a178ea' : theme.text.main,
          fontSize: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
        onMouseEnter={() => handleMouseEnter('Services')}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleTextClick('services')}
        className="headersSections">
        Services
      </TypographyHeader>
      <TypographyHeader
        style={{
          color: isTextHovered('Projects') ? '#a178ea' : theme.text.main,
          fontSize: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
        onMouseEnter={() => handleMouseEnter('Projects')}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleTextClick('projects')}
        className="headersSections">
        Projects
      </TypographyHeader>
      <div className="verticalLine" />
      <TypographyHeader
        style={{
          color: isTextHovered('Contact') ? '#a178ea' : theme.text.main,
          fontSize: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
        onMouseEnter={() => handleMouseEnter('Contact')}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleTextClick('AI')}
        className="headersSections">
        Contact
      </TypographyHeader>
    </div>
  );
};
