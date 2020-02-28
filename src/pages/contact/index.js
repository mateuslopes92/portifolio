import React from "react"

import me from "../../assets/ME2.jpg"
import linkedin from "../../assets/linkedin.png"
import whatsapp from "../../assets/whatsapp.png"
import gmail from "../../assets/gmail.png"

import { Container } from "./styles"

export default function Contact() {
  return (
    <Container>
      <div>
        <h1>ENTRE EM CONTATO</h1>
        <ul>
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
          <li>
            <a href="mailto:mateuslopes92@gmail.com?Subject=Gostaria%20de%20contratar%20seus%20servi%E7os">
              <img src={gmail} alt="gmail" />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  )
}
