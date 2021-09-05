import React from "react"

import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa"

const Contatos = () => {
  return (
    <section className="contatos">
      <div className="contatos-links">
        <a href="https://www.instagram.com/camylleazevedopsi/?igshid=1w3m8n6nmvosk">
          <FaInstagram />
        </a>{" "}
        <a href="https://www.facebook.com/manuela.queiroz.79274089">
          <FaFacebookF />
        </a>
        <a href="https://www.youtube.com/channel/UC7NjOFKua9sCRyo_2Auvk8Q">
          <FaYoutube />
        </a>
      </div>
      <hr />
      <p>&copy;{new Date().getFullYear()} - Camylle Azevedo</p>
      <p>Psicóloga Infantil</p>
    </section>
  )
}

export default Contatos
