import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html, body, #___gatsby {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    margin-left: 360px;
    background: #eee;


    @media(max-width: 768px){
      margin-left: 0px;
    }
  }

  body, input, button {
    font: 14px, 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

`
