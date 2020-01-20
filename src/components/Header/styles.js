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

  header{
    padding: 30px;
    display: flex;
    flex-direction: column;

    img {
      height: 200px;
      margin-top: 10%;
      margin-left: auto;
      margin-right: auto;
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
      margin-top: 15px;
      margin-bottom: 90px;
      text-align: center;
    }
  }

  nav {
    width: 85%;

    ul {
      li {
        padding: 15px 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        & + li {
          border-top: 1px solid #333;
        } 

        a {
          
          text-decoration: none;
          font-size: 25px;
          color: #AEAEA5;
          display: flex;
          &:hover {
            color: #FFF;
          }
        }
      }
    }


  }

`;

export const Footer = styled.footer`
  text-align: center;
  margin-top: auto;
  margin-bottom: 0.5em;

  ul {
    width: 300px;
    height: 40px;
    margin-right: auto;
    margin-left: auto;
    

    li {
      display: inline-block;
      padding-top: 0px;
      padding-right: 1em;
      padding-bottom: 0px;
      padding-left: 1em;

      a {
          img {
          height: 30px;
          border-radius: 0;
        }
      }

    }
  }

`;
