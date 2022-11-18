import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    overscroll-behavior: touch;
  }

  html {
    position: relative;
    height: 100%;
    width: 100%;
    font-size: 16px;
  }

  body {
    user-select: none;
    position: relative;
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
    font-family: ${({ theme }) => theme.font.main};
    font-size: ${({ theme }) => theme.fontSize.main};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #__next {
    position: relative;
    height: 100%;
    width: 100%;
  }

  img,
  video,
  svg {
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    transition: background-color 10000s;
    width: inherit;
    box-sizing: border-box;
    border: 0px solid rgba(255, 255, 255, 0);
    border-radius: 1000px;
    padding: 0;
    font-size: 1rem;
    -webkit-text-fill-color: ${({ theme }) => theme.color.text};
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  ul {
    list-style-type: none;
  }

  :focus {
    outline: none;
  }

  ::-moz-focus-inner {
    border: 0;
  }

  input {
    border: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
    appearance: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  ::-webkit-scrollbar {
    height: 0;
    width: 0;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

`;

export default GlobalStyle;
