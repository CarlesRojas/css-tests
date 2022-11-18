import { createStitches } from '@stitches/react';

export const { styled, css, globalCss } = createStitches({
  theme: {
    colors: {
      backgroundcolor: '#1e212c',
      textColor: 'white',
      primaryColor: '#00aaff'
    },
    fontSizes: {
      main: '16px'
    },
    fonts: {
      main: 'Montserrat, sans-serif',
      terrible: 'Comic Sans MS, sans-serif'
    }
  }
});
