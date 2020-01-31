import styled from 'styled-components';

const ShareWrapper = styled.div`
  margin-top: 50px;
  text-align: center;
  padding-bottom:50px;

  .Demo__some-network {
    vertical-align: top;
    display: inline-block;
    margin-right: 15px;
    text-align: center;
  }
  .Demo__some-network__share-button {
    cursor: pointer;
  }
  
  .Demo__some-network__share-button:hover:not(:active) {
    opacity: 0.75;
  }

`;

export default ShareWrapper;