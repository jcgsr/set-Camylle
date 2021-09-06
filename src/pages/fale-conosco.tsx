import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Supervisao = () => {
  return (
    <Layout>
      <Seo
        title="Fale Conosco"
        description="Página para enviar mensagens para Camylle"
      />
      <main>
        <article className="card">
          <StaticImage
            src="../assets/images/fale.jpg"
            layout="constrained"
            placeholder="tracedSVG"
            alt="Camylle ao telefone"
          />

          <h1>fale conosco</h1>
          <div className="form-container">
            <form
              action="https://formspree.io/f/xoqyykby"
              method="POST"
              className="form"
            >
              <label>
                E-mail:
                <input type="email" name="_replyto" />
              </label>
              <label>
                Mensagem:
                <textarea name="message"></textarea>
              </label>

              <button className="btn" type="submit">
                Enviar
              </button>
            </form>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export default Supervisao;
