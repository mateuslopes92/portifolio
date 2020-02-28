import React from "react"

import { Container, Header, Section } from "./styles.js"

export default function index() {
  return (
    <Container>
      <Header>
        <h1>Mateus dos Santos Lopes</h1>
      </Header>
      <Section>
        <article>
          <div>
            <br />
            <h2>Fullstack Javascritp Developer</h2>
            <p>
              {/* Hello. My name is Mateus, software developer since 2019, with
              experience in the javascript stack (NodeJs, ReactJs, React Native
              and GatsbyJs). <br />
              My current focus is building mobile apps solutions with react
              native and web apps with reactjs. In my spare time I always seek
              more knowledge and new technologies. */}
              Meu nome é Mateus, tenho 23 anos, moro atualmente em Foz do Iguaçu
              e comecei a atuar como desenvolvedor de software em 2019, com
              experiência na stack de javascript (NodeJs, ReactJs, React Native
              e GatsbyJs). Meu foco atual é criar soluções de aplicativos móveis
              com react native e web com reactjs/gatsbyjs. Nas horas vagas,
              busco sempre mais conhecimento e novas tecnologias para me manter
              atualizado.
            </p>
          </div>
        </article>
      </Section>
    </Container>
  )
}
