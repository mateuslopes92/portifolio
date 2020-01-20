import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 25em;
  background-image: linear-gradient(-141deg, #7159c1, #ab59c1 51%);
  justify-content: center;
  align-items: center;
  transform: skewY(-4deg);
  transform-origin: top left;
  border-bottom: 12px solid #161510;
  background-position-x: 0px;
  background-position-y: 100%;
  background-size: cover;
  
  h1 {
    position: absolute;
    top: 33%;
    transform: skewY(4deg);
    transform-origin: top left;
    font-size: 5.5em;
    color: #fff;
  }
`;

export const Section = styled.section`
  display: block;

  article {
    width: 685px;
    height: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  div {
    padding-bottom: 8em;
    padding-top: 2em;
    box-sizing: border-box;

    h2 {
      font-size: 30px;
      margin-top: 0.9625em;
      text-align: left;
      font-size: 3em;
      color: #161510;
      margin-bottom: 0.5625em;
    }

    p {
      color: #777;
      line-height: 1.5em;
      font-size: 1.5em;
      font-weight: 700;
    }
  }
`;
 

