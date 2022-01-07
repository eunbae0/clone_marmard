import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";  // style-reset 패키지

const GlobalStyles = createGlobalStyle` 
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  a{
    text-decoration: none;
    color: inherit;
  }
  html {
    box-sizing: border-box;
  }
  body {
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyles;