import { css, Global } from '@emotion/react';

const theme = (
  <Global
    styles={css`
      :root {
        --backgroundcolor: #1e212c;
        --textColor: white;
        --primaryColor: #00aaff;

        --fontSize: 16px;

        --font: 'Montserrat', sans-serif;
      }
    `}
  />
);

export default theme;
