import React from 'react';

import Footer from '../components/Footer';

import { Container, Header, Section } from './styles.js';

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
            <h2>Software Enginer</h2>
            <p>
            Hello. My name is Mateus, software developer since 2019, with experience in healthcare, education and apps for business. My current focus is building mobile apps solutions with react native and web apps with reactjs. In my spare time I always seek more knowledge.
            </p>
          </div>
        </article>
      </Section>
      <Footer />
    </Container>
  );
}
