import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-image: linear-gradient(-141deg, #7159c1, #ab59c1 51%);
  height: 100%;
`

export const Card = styled.div`
  width: 500px;
  height: 400px;
  margin: 30px;
  background: #eaeaea;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  transition: 0.5s ease;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
    box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.6);
    border-radius: 5px;
  }
`

export const Institution = styled.span`
  display: flex;
  font-size: 20px;
  color: #575757;
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
`

export const Course = styled.strong`
  font-size: 16px;
  margin-top: 20px;
  color: #575757;
`

export const Description = styled.p`
  margin-top: 20px;
  color: #3b3b3b;
  padding: 0 10px;
`

export const LinkTo = styled.div`
  background: #ab59c1;
  height: 36px;
  width: 100%;

  bottom: 0;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #fff;
  }
`
