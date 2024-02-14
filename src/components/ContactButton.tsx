import React, {useState} from 'react';

import './ContactButton.css';

type ContactButtonProps = {
  text: string;
  fontSize: string;
  onClick: () => void;
  height: number;
  width: number;
  textColor: string;
  borderColor: string;
  backgroundColorHover?: string;
  textHoverColor?: string;
};

export const ContactButton = (props: ContactButtonProps) => {
  const {
    text,
    onClick,
    fontSize,
    height,
    width,
    textColor,
    borderColor,
    textHoverColor,
    backgroundColorHover,
  } = props;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="circleButton"
      style={{
        height: `${height}px`,
        width: `${width}px`,
        color: isHovered ? textHoverColor : textColor,
        borderColor: borderColor,
        fontSize: fontSize,
        backgroundColor: isHovered ? backgroundColorHover : 'transparent',
        zIndex: 10,
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {text}
    </div>
  );
};
