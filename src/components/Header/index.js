import React from 'react';
import {Link} from 'gatsby';

import me from '../../assets/ME2.jpg';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';

import { Container, Footer } from './styles';

export default function Header() {
  return (
    <Container>

      <img src={me} alt="" />

      <span>Mateus dos Santos Lopes</span>

      <small>Software Enginer</small>

      <Link to="/">Home</Link>
      <Link to="/education">Portifolio</Link>
      <Link to="#">Contact</Link>
      <Footer>
        <a href="https://github.com/mateuslopes92">
          <img src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/mateus-dos-santos-lopes-a8049815b/">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://www.instagram.com/mateuslopesskt">
          <img src={instagram} alt="instagram" />
        </a>
      </Footer>
    </Container>
  );
}
