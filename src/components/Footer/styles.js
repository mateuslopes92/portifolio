import styled from "styled-components"

export const Container = styled.section`
  background-color: rgba(34, 34, 34, 0.7);
  color: #fff;
  padding-top: 1.5em;
  padding-right: 0px;
  padding-bottom: 1.5em;
  padding-left: 0px;

  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  margin-left: 360px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 360px;

    @media (max-width: 768px) {
      margin-left: 0px;
    }

    span {
      text-align: center;
    }
  }
`
