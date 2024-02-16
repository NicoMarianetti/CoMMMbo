import React, {useEffect, useRef} from 'react';
import './Connect.css';
import {Typography, TypographyHeader} from '../../assets/typography';
import {theme} from '../../assets/theme';

import {ReactComponent as InstagramLogo} from '../../assets/img/social/icon-instagram.svg';
import {ReactComponent as FacebookLogo} from '../../assets/img/social/icon-facebook.svg';
import {ReactComponent as PinterestLogo} from '../../assets/img/social/icon-pinterest.svg';
import {ReactComponent as FoursquareLogo} from '../../assets/img/social/icon-foursquare.svg';

export const Connect = () => {
  const connectStyle = {
    color: theme.text.main,
    fontSize: '40px',
  };

  const emailStyle = {
    color: '#F5FB59',
    fontSize: '50px',
    margin: '0',
    display: 'inline-block',
    lineHeight: '1.1',
  };

  const socialTextStyle = {
    color: theme.text.main,
    fontSize: '30px',
  };

  const textRef = useRef<HTMLParagraphElement>(null);
  const textRef2 = useRef<HTMLParagraphElement>(null);
  const textRef3 = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkTextWidth = () => {
      const textElement: HTMLParagraphElement = textRef.current!;
      const textElement2: HTMLParagraphElement = textRef2.current!;
      const textElement3: HTMLParagraphElement = textRef3.current!;
      const containerElement: HTMLDivElement = containerRef.current!;
      const containerWidth = containerElement.offsetWidth;

      console.log('containerWidth', containerWidth);
      console.log('textElement.offsetWidth', textElement.offsetWidth);

      if (textElement.offsetWidth > containerWidth) {
        let fontSize = parseFloat(textElement.style.fontSize) || 0;
        while (textElement.offsetWidth > containerWidth) {
          fontSize -= 1;
          textElement.style.fontSize = `${fontSize}px`;
          if (fontSize < 0) {
            break;
          }
        }
        textElement2.style.fontSize = `${fontSize}px`;
        textElement3.style.fontSize = `${fontSize * 0.4}px`;
      } else {
        let fontSize = parseFloat(textElement.style.fontSize) || 0;
        while (textElement.offsetWidth < containerWidth) {
          fontSize += 1;
          textElement.style.fontSize = `${fontSize}px`;
        }
        textElement2.style.fontSize = `${fontSize}px`;
        textElement3.style.fontSize = `${fontSize * 0.4}px`;
      }
    };

    checkTextWidth();

    // Add event listener for window resize
    window.addEventListener('resize', () => checkTextWidth());

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', () => checkTextWidth());
    };
  }, []);

  return (
    <div className="connectContainer" ref={containerRef}>
      <Typography style={connectStyle} forwardedRef={textRef3}>
        LET'S CONNECT
      </Typography>

      <div>
        <TypographyHeader style={emailStyle} forwardedRef={textRef2}>
          HELLO@
        </TypographyHeader>
        <TypographyHeader style={emailStyle} forwardedRef={textRef}>
          FLAVIOMARIANETTI.COM
        </TypographyHeader>
      </div>

      <div className="social">
        <TypographyHeader style={socialTextStyle}>FOLLOW ME</TypographyHeader>

        <InstagramLogo />
        <FacebookLogo />
        <PinterestLogo />
        <FoursquareLogo />
      </div>
    </div>
  );
};
