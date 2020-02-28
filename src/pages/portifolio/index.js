import React, { useEffect } from "react"

import { Container } from "./styles"

export default function Portifolio() {
  useEffect(() => {
    var txtTitulo = "Estou trabalhando nisso ..."
    var txt1 = document.getElementById("titulo")

    var speed = 100
    var cont = 0

    function typeWriter() {
      if (cont < txtTitulo.length) {
        txt1.innerHTML += "<b>" + txtTitulo.charAt(cont) + "</b>"
        cont++
        setTimeout(typeWriter, speed)
      } else {
        cont = 0
      }
    }

    typeWriter()
  }, [])

  return (
    <Container>
      <h1 id="titulo"></h1>
    </Container>
  )
}
