import React from 'react';

export const colorWithOpacity = (color: string, opacity: number): string => {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity.toString() + ')';
};

export const colors = {
  background: '#FFFFFF',
  white: '#FFFFFF',
  text: '#333333',
  pink: '#CE0058',
  board: '#910048',
  yellow: '#FFA400',
  darkYellow: '#CA9F23',
  oceanBlue: '#2B4A75',
  gray: '#F2F2F2',
  lightGray: '#f3f2f3',
  darkGray: '#9A8B7D',
  mediumLightGray: '#C9C9C9',
  red: '#C90000',
  green: '#3FC987',
  lightPink: '#f7cdde',
  lighterPink: '#fae5ee',
  tin: '#C9C9C9',
  darkerGray: '#333333',
  black: '#000000',
  backgroundPopup: colorWithOpacity('#E5E5E5', 0.5),
};
