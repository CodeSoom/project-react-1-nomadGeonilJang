import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
    }
    :root {
        /* Color */
        --color-purple: #5b36ac;
        --color-charcoal-grey: #464052;
        --color-charcoal-grey-two: #363a42;
        --color-black: #000000;
        --color-bloack-10: rgba(0, 0, 0, 0.1);
        --color-white: #ffffff;
        --color-cool-grey: #a4a6b0;
        --color-pale-grey: #f9f9fb;

        /* Font size */

        --font-large: 32px;
        --font-medium: 20px;
        --font-regular: 14px;
        --font-small: 12px;
        --font-micro: 8px;

        /* Font weight */
        --weight-bold: 700;
        --weight-semi-bold: 600;
        --weight-regular: 400;

        /* Size */
        --size-border-radius: 4px;

        /* Animation */
        --animation-duration: 250ms;
        }

    body{
        height:100vh;
        width:100%;
        font-size:14px;
        background-color:black;
        /* opacity:0.1; */
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    }
    a{
        text-decoration:none;
        color:inherit;
        cursor: pointer;
    }
    ol, ul, li {
        list-style: none;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
    input, button {
        background-color: transparent;
    }
    h1, h2, h3, h4, h5, h6 {
    font-family:'Maven Pro', sans-serif;
  }
`;

export default GlobalStyles;
