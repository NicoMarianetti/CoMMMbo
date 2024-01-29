import React from 'react';
import './Versatility.css';
import {Typography, TypographyHeader} from '../../assets/typography';
import {theme} from '../../assets/theme';

export const Versatility = () => {
  const posters: string[] = [
    'Big Brother Explosion Mismatch.png',
    'BG_ FLOWERS 1.png',
    'Spring Chance Rhythm.png',
  ];

  return (
    <div
      style={{
        position: 'relative',
        height: '1000px',
        width: '100%',
      }}>
      <TypographyHeader
        className="animateRight"
        style={{
          top: '20%',
          position: 'absolute',
          color: '#F5FB59',
          zIndex: 999,
          fontSize: 120,
          whiteSpace: 'nowrap',
          overflowX: 'visible',
          margin: '0',
        }}>
        VERSATILITY . STYLE . VERSATILITY . STYLE . VERSATILITY . STYLE .
        VERSATILITY . STYLE .
      </TypographyHeader>
      <TypographyHeader
        className="animateLeft"
        style={{
          position: 'absolute',
          top: '45%',
          color: 'transparent',
          zIndex: 999,
          fontSize: 120,
          WebkitTextStrokeWidth: '3px',
          WebkitTextStrokeColor: theme.text.main,
          whiteSpace: 'nowrap',
          overflowX: 'visible',
          margin: 0,
        }}>
        CONCEPT . STYLE . CONCEPT . STYLE . CONCEPT . STYLE . CONCEPT . STYLE .
        CONCEPT . STYLE .
      </TypographyHeader>

      <div className="postersVersatility">
        {posters.map((poster, index) => (
          <img
            key={index}
            src={require(`../../assets/img/${poster}`)}
            alt={poster}
            className={`poster${index + 1}`}
          />
        ))}

        {/* <img
          src={require('../../assets/img/Superchicas Musicales Vol2 POSTER copia 1.png')}
          alt="poster1"
          className="firstPoster"
        />
        <img
          src={require('../../assets/img/poster2.png')}
          alt="poster2"
          className="secondPoster"
        />
        <img
          src={require('../../assets/img/poster space jam 2.png')}
          alt="poster3"
          className="thirdPoster"
        /> */}
      </div>
    </div>
  );
};
