import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-image: linear-gradient(-141deg, #7159c1, #ab59c1 51%);
  height: 100vh;

  div {
    h1 {
      color: #7159c1;
      font-size: 15px;
      margin-bottom: 30px;
    }

    background: #fff;
    width: 500px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 50px;

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
  }
`
