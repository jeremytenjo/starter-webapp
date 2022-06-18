import { type ComponentDefaultsProps } from '@useweb/ui/Theme'

import poppins400Font from '../../tokens/typography/fonts/poppins/regular.woff2'
import colors from '../../tokens/colors'

const defaults: ComponentDefaultsProps = {
  styleOverrides: `
  :root {
    --font-main: PoppinsRegular;
  }

  @font-face {
    font-family: 'PoppinsRegular';
    font-style: normal;
    font-display: swap;
    src: url('${poppins400Font}') format('woff2');
  }     

  * {
    box-sizing: border-box;
  }

  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
    margin: 0;
    background-color: ${colors.backgroundColor};
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    list-style: none;
  }

  input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0px;
  }

  .firebase-emulator-warning {
    display: none;
  }

  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  input {
    border: none;
  }

  textarea:focus, input:focus{
    outline: none;
  }

`,
}

export default defaults
