import React from 'react';

import {normalizeSize} from '../utils/size';
import {theme} from './theme';

const styles = {
  text: {
    fontSize: normalizeSize(16),
    color: theme.colors.black,
    fontWeight: 400,
    lineHeight: 1.5,
  },
};

type TextProps = {
  style?: React.CSSProperties;
  className?: string;
  forwardedRef?: React.RefObject<HTMLParagraphElement>;
  onAnimationEnd?: () => void;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
};

export const TypographyHeader = (props: TextProps) => {
  const {
    children,
    forwardedRef,
    onAnimationEnd,
    onMouseEnter,
    onMouseLeave,
    onClick,
    ...restProps
  } = props;
  const className = restProps.className ? restProps.className : '';
  return (
    <p
      {...restProps}
      className={className}
      ref={forwardedRef}
      onAnimationEnd={onAnimationEnd}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{
        ...styles.text,
        ...restProps.style,
        fontFamily: 'Molgak Classy',
        letterSpacing: '1px',
      }}>
      {children}
    </p>
  );
};

export const Typography = (props: TextProps) => {
  const {
    children,
    forwardedRef,
    onAnimationEnd,
    onMouseEnter,
    onMouseLeave,
    onClick,
    ...restProps
  } = props;
  const className = restProps.className ? restProps.className : '';
  return (
    <p
      {...restProps}
      className={className}
      ref={forwardedRef}
      onAnimationEnd={onAnimationEnd}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{
        ...styles.text,
        ...restProps.style,
        fontFamily: 'Roboto',
      }}>
      {children}
    </p>
  );
};
