import {heightPercentageToPX, widthPercentageToPX} from '../utils/size';

export const colorWithOpacity = (color: string, opacity: number): string => {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity.toString() + ')';
};

export const theme = {
  spacing: {
    seccionPadding: heightPercentageToPX('2%'),
    horizontalPadding: widthPercentageToPX('6%'),
    topPadding: heightPercentageToPX('2.5%'),
    touchableVerticalSpacing: heightPercentageToPX('1.5%'),
    touchableHorizontalSpacing: heightPercentageToPX('1.5%'),
  },
  colors: {
    gradientFirst: '#707be8',
    gradientSecond: '#7849a2',
    darkViolet: '#232c49',
    init: '#6879e3',
    final: '#7551ab',
    gray: '#566281',
    white: '#fefffe',
    lightBlue: '#22cffd',
    red: '#d32e2f',
    grayText: '#a5a5a4',
    yellow: '#fdde45',
    green: '#2f7c32',
    blue: '#445c88',
    black: '#000000',
    darkGray: '#4c4d4d',
    lightGray: '#e4e5e4',
    darkBlue: '#1e2d49',
    lightYellow: '#fada5f',
    drawRed: '#b80000',
    drawOrange: '#db3e00',
    drawYellow: '#fccb00',
    drawGreen: '#008B02',
    drawPetrol: '#006B76',
    drawBlue: '#1273DE',
    drawViolet: '#5300eb',
    drawBlack: '#000000',
    timer: '#3e98c7',
    backgroundGray: '#E5E5E5',
  },
  text: {
    main: '#fefffe',
  },
};
