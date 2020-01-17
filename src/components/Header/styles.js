import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 360px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #161510;
  overflow-x: hidden;
  padding-top: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;

  img {
    height: 200px;
    margin-top: 10%;
    margin-bottom: 30px;
    border-radius: 50%;
  }

  span {
    color: #FFF;
    font-size: 26px;
    font-weight: bold;
  }

  small {
    color: rgba(255, 255, 255, 0.7);
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 90px;
    
  }

  a {
    margin: 10px auto;
    align-self: left;
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #AEAEA5;
    display: block;

    &:hover {
      color: #FFF;
    }
  }
`;

export const Footer = styled.div`
  bottom: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
      img {
      height: 30px;
      border-radius: 0;
    }

    span {
      font-size: 12px;
    }
  }
  
`;
