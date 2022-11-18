export interface Theme {
  color: {
    background: string;
    text: string;
    primary: string;
  };
  font: {
    main: string;
    terrible: string;
  };
  fontSize: {
    main: string;
  };
}

const theme: Theme = {
  color: {
    background: '#1e212c',
    text: 'white',
    primary: '#00aaff'
  },
  font: {
    main: 'Montserrat, sans-serif',
    terrible: 'Comic Sans MS, cursive, sans-serif'
  },
  fontSize: {
    main: '16px'
  }
};

export default theme;
