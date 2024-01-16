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
  children: React.ReactNode;
};

export const TypographyHeader = (props: TextProps) => {
  const {children, ...restProps} = props;
  return (
    <p
      {...restProps}
      style={{
        ...styles.text,
        ...restProps.style,
        fontFamily: 'Dancing Script',
      }}>
      {children}
    </p>
  );
};

export const Typography = (props: TextProps) => {
  const {children, ...restProps} = props;
  return (
    <p
      {...restProps}
      style={{
        ...styles.text,
        ...restProps.style,
        fontFamily: 'Roboto',
      }}>
      {children}
    </p>
  );
};
