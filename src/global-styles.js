import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  @media screen and (max-width: 700px){
    .pf-text{
      display: none;
    }
    .pf-caption .valign-cell{
      padding: 10px;
    }
  }
  @media screen and (max-width: 375px){
    .pf-grid-item{
      width: 100%;
    }
  }
`;
export default GlobalStyle;
