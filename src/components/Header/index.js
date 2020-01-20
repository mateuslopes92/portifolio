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
      
      <header>
        <img src={me} alt="" />

        <span>Mateus dos Santos Lopes</span>

        <small>Software Enginer</small>
      </header>
      
      <nav>
        <ul>
          <li>
            <Link to="/" activeStyle={{ color: "white" }}>Home</Link>
          </li>
          <li>
           <Link to="/portifolio" activeStyle={{ color: "white" }}>Portifolio</Link>
          </li>
          <li>
            <Link to="/contact" activeStyle={{ color: "white" }}>Contact</Link>
          </li>
        </ul>
      </nav>


      <Footer>
        <ul>
          <li>
            <a href="https://github.com/mateuslopes92">
              <img src={github} alt="github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mateus-dos-santos-lopes-a8049815b/">
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mateuslopesskt">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
}
