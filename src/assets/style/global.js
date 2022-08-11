import { createGlobalStyle } from "styled-components";

import "./font.css";
import "./icon.css";
import "./color.css";

const GlobalStyles = createGlobalStyle`
     *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, p, ul, ol {
        margin: 0;
    }
     
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    .container{
        max-width: 1200px;
        margin: 0 auto;
    } 
    .recharts-default-legend{
        display: none !important;
    }
    .recharts-cartesian-axis-line{
        display: none;
    }
   .recharts-cartesian-grid-vertical{
    display: none;
   }
  .recharts-cartesian-axis-ticks{
   font-size: 10px;
  }
  /* .yAxis{
    display: none;
  }
  .xAxis{
    display: none;
  } */
  @media (max-width:576px) {
    .recharts-responsive-container{
        width: 100% !important;
    }
  }

`;

export default GlobalStyles;
