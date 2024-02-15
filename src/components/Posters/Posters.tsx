import React, {useState} from 'react';

import './Posters.css';

export const Posters = () => {
  const [hoveredPoster, setHoveredPoster] = useState<number>(-1);

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const posters: string[] = [
    'Superchicas Musicales Vol2 POSTER copia 1.png',
    'poster2.png',
    'poster space jam 2.png',
    'poster4.png',
    'poster5.png',
  ];

  return (
    <div className="posters">
      {posters.map((poster, index) => {
        return (
          <div
            style={{
              top: '50%',
              left: `calc(50% - ${
                Math.trunc(posters.length / 2) * windowWidth * 0.15
              }px + ${
                hoveredPoster !== -1 && index > hoveredPoster
                  ? windowWidth * 0.1
                  : 0
              }px)`,
              transform: 'translate(-50%, -50%)',
              marginLeft: `${index * windowWidth * 0.15}px`,
            }}
            onMouseEnter={() => setHoveredPoster(index)}
            onMouseLeave={() => setHoveredPoster(-1)}
            className="posterContainer"
            key={index}>
            <img
              src={require(`../../assets/img/${poster}`)}
              alt={`poster${index}`}
            />
          </div>
        );
      })}
    </div>
  );
};
