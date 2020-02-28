import React from "react"

import {
  Container,
  Card,
  Institution,
  Course,
  Description,
  LinkTo,
} from "./styles"

export default function Education() {
  return (
    <Container>
      <Card>
        <Institution>
          Unipar - Univesidade Paranaense <br />
          2015 - 2018
        </Institution>
        <Course>
          {/* Diploma - Technology in System Development and Analalysis. */}
          Tecnologia em Análise e Desenvolvimento de Sistemas
        </Course>
        <Description>
          Curso superior com duração de 3 anos realizado em Toledo-PR.
        </Description>
        <LinkTo>
          <a href="https://www.unipar.br/">Site da Unipar</a>
        </LinkTo>
      </Card>
      <Card>
        <Institution>
          Get Wise <br />
          2016
        </Institution>
        <Course>
          {/* Diploma - Technology in System Development and Analalysis. */}
          Curso de Inglês (Metodo Callan)
        </Course>
        <Description>
          Curso de inglês com foco em conversação, realizado estudo de 5 dos 10
          livros (não finalizado).
        </Description>
        <LinkTo>
          <a href="http://www.getwise.com.br/">Site da Get Wise</a>
        </LinkTo>
      </Card>
      <Card>
        <Institution>
          Rocketseat <br />
          2019
        </Institution>
        <Course>
          {/* Diploma - Technology in System Development and Analalysis. */}
          Bootcamp Gostack 9
        </Course>
        <Description>
          Treinamento imersivo nas tecnologias mais modernas de desenvolvimento
          web e mobile utilizando NodeJs, ReactJs e React Native.
        </Description>
        <LinkTo>
          <a href="https://rocketseat.com.br/">Site da Rocketseat</a>
        </LinkTo>
      </Card>
    </Container>
  )
}
