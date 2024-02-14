import React, {useEffect, useRef} from 'react';
import './Welcome.css';
import {Typography, TypographyHeader} from '../../assets/typography';
import {theme} from '../../assets/theme';
import ReactCurvedText from 'react-curved-text';
import {ContactButton} from '../../components/ContactButton';

export const Welcome = () => {
  const textStyle = {
    fontSize: '120px',
    color: theme.text.main,
    fontWeight: 'bold',
    zIndex: 999,
  };

  const bannerTextStyle = {
    fontSize: '20px',
    color: theme.text.main,
    fontWeight: 'bold',
    zIndex: 999,
  };

  const textRef = useRef<HTMLParagraphElement>(null);
  const textRef2 = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkTextWidth = (width: number) => {
      const textElement: HTMLParagraphElement = textRef.current!;
      const textElement2: HTMLParagraphElement = textRef2.current!;
      textElement.style.letterSpacing = `${0}px`;
      textElement2.style.letterSpacing = `${0}px`;
      const textWidth = textElement.offsetWidth;

      if (textWidth > width) {
        let letterSpacing = parseFloat(textElement.style.letterSpacing) || 0;
        let letterSpacing2 = parseFloat(textElement2.style.letterSpacing) || 0;
        while (textElement.offsetWidth > width) {
          letterSpacing -= 1;
          letterSpacing2 -= 1;
          textElement.style.letterSpacing = `${letterSpacing}px`;
          textElement2.style.letterSpacing = `${letterSpacing2}px`;
          if (letterSpacing < 0) {
            break;
          }
        }
      } else {
        let letterSpacing = parseFloat(textElement.style.letterSpacing) || 0;
        let letterSpacing2 = parseFloat(textElement2.style.letterSpacing) || 0;
        while (textElement.offsetWidth < width) {
          letterSpacing += 1;
          letterSpacing2 += 1;
          textElement.style.letterSpacing = `${letterSpacing}px`;
          textElement2.style.letterSpacing = `${letterSpacing2}px`;
        }
      }
    };

    checkTextWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener('resize', () => checkTextWidth(window.innerWidth));
    containerRef.current!.addEventListener('mouseenter', () =>
      checkTextWidth(window.innerWidth / 2),
    );
    containerRef.current!.addEventListener('mouseleave', () =>
      checkTextWidth(window.innerWidth),
    );

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', () =>
        checkTextWidth(window.innerWidth),
      );
      containerRef.current!.removeEventListener('mouseenter', () =>
        checkTextWidth(window.innerWidth / 2),
      );
      containerRef.current!.removeEventListener('mouseleave', () =>
        checkTextWidth(window.innerWidth),
      );
    };
  }, []);

  return (
    <div className="containerWelcome" ref={containerRef}>
      <div className="textContainerWelcome">
        <TypographyHeader
          forwardedRef={textRef2}
          className="textWelcome"
          style={textStyle}>
          DIGITAL
        </TypographyHeader>
        <TypographyHeader
          forwardedRef={textRef}
          className="textWelcome"
          style={textStyle}>
          DESIGNER
        </TypographyHeader>

        <div className="bannerWelcomeContainer">
          <Typography style={bannerTextStyle}>Flavio Marianetti</Typography>
          <TypographyHeader style={bannerTextStyle}>
            PORTFOLIO 2024
          </TypographyHeader>
          <div className="circleBannerWelcome"></div>
        </div>

        <div className="descriptionTextWelcomeContainer">
          <Typography
            className="descriptionTextWelcome "
            style={{...bannerTextStyle, fontWeight: 'normal'}}>
            Passionate visual designer dedicated to generate and improve visual
            communication between companies and audiences.
          </Typography>
        </div>

        <div className="rightWelcomeContainer">
          <div className="curvedText">
            <div className="curvedTextContainer">
              <ReactCurvedText
                text="WELCOME, THIS IS ME !"
                height={120}
                width={120}
                rx={40}
                ry={40}
                cx={60}
                cy={60}
                textProps={{
                  fontSize: '14px',
                  fill: '#00AF9A',
                  letterSpacing: '2px',
                }}
                reversed
              />
            </div>
            <img
              className="profilePictureWelcome"
              src={require('../../assets/img/ProfilePic.png')}
              alt="Profile picture"
            />
          </div>
          <div className="verticalLineWelcome" />
          <ContactButton
            text="GET IN TOUCH"
            onClick={() => {}}
            height={90}
            width={90}
            textColor={'#00AF9A'}
            fontSize="14px"
            borderColor={'#266EB2'}
            textHoverColor={theme.text.main}
            backgroundColorHover={'#266EB2'}
          />
        </div>
      </div>
    </div>
  );
};
