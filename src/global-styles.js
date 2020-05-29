import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  @media screen and (max-width: 700px){
    .pf-text{
      display: none;
    }
  }
`;
export default GlobalStyle;
