import './Versatility.css';
import {TypographyHeader} from '../../assets/typography';
import {theme} from '../../assets/theme';
import {ParallaxProvider, Parallax} from 'react-scroll-parallax';

export const Versatility = () => {
  const posters: string[] = [
    'Big Brother Explosion Mismatch.png',
    'BG_ FLOWERS 1.png',
    'Spring Chance Rhythm.png',
  ];

  const getSpeed = (index: number) => {
    if (index === 0) return 30;
    if (index === 1) return 20;
    if (index === 2) return 60;
  };

  return (
    <ParallaxProvider>
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
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: theme.text.main,
            whiteSpace: 'nowrap',
            overflowX: 'visible',
            margin: 0,
          }}>
          CONCEPT . STYLE . CONCEPT . STYLE . CONCEPT . STYLE . CONCEPT . STYLE
          . CONCEPT . STYLE .
        </TypographyHeader>

        <div className="postersVersatility">
          {posters.map((poster, index) => (
            <Parallax
              key={index}
              speed={getSpeed(index)}
              className={`posterContainerVersatility posterContainerVersatility${
                index + 1
              }`}>
              <img
                src={require(`../../assets/img/${poster}`)}
                alt={poster}
                className={`poster${index + 1}`}
              />
            </Parallax>
          ))}
        </div>
      </div>
    </ParallaxProvider>
  );
};
