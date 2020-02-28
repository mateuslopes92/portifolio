import React from "react"
import { Link } from "gatsby"

import me from "../../assets/ME2.jpg"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import whatsapp from "../../assets/whatsapp.png"

import { Container, Footer } from "./styles"

export default function Header() {
  return (
    <Container>
      <header>
        <img src={me} alt="" />

        <span>Mateus dos Santos Lopes</span>

        <small>Fullstack Javascritp Developer</small>
      </header>

      <nav>
        <ul>
          <li>
            <Link to="/" activeStyle={{ color: "#7159c1" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/education" activeStyle={{ color: "#7159c1" }}>
              Education
            </Link>
          </li>
          <li>
            <Link to="/experience" activeStyle={{ color: "#7159c1" }}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="/portifolio" activeStyle={{ color: "#7159c1" }}>
              Portifolio
            </Link>
          </li>
          <li>
            <Link to="/contact" activeStyle={{ color: "#7159c1" }}>
              Contact
            </Link>
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
            <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5544999389743">
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}
