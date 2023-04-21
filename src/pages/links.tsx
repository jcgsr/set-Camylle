import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

// import { FaTelegramPlane } from "react-icons/fa";

const Links = () => {
  return (
    <Layout>
      <Seo title="Links" description="Página de Links de Camylle" />
      <main>
        <article className="card-links">
          <h1>Aquisição de Habilidades sem pular etapas!</h1>
          <button className="btn">
            <a
              href="https://docs.google.com/forms/d/1_kCOPiVLLk1ucf-kENt-YeBfokuSgGvroTKoCABmqmg/viewform?edit_requested=true"
              target="new"
            >
              Lista de espera para Mentoria Lapidação de Consultório
            </a>
          </button>
          <button className="btn">
            <a
              href="https://docs.google.com/forms/d/18sBonNSkurm_1T_JTg6VRmZq5V1rawsWNt4e3UywT-k/viewform?edit_requested=true"
              target="new"
            >
              Lista de espera para Programa de Tutoria Profissional
            </a>
          </button>
          <button className="btn">
            <a
              href="https://docs.google.com/forms/d/1IEjHJH1i_xXUxdghk5bO1Vo_93a60nTUyNhnmbi5KyI/viewform?edit_requested=true"
              target="new"
            >
              Pré-inscrição para Grupinho Partilhar
            </a>
          </button>
          <button className="btn">
            <a
              href="https://ead.abamais.com/cursos/aprendizagem-sem-erro/"
              target="new"
            >
              ABA: Aprendizagem sem erro
            </a>
          </button>
          <button className="btn">
            <a
              href="https://api.whatsapp.com/send?phone=5579816534346&text=Olá! Gostaria de mais informações sobre o Somar Espaço Terapêutico."
              target="new"
            >
              Somar Espaço Terapêutico
            </a>
          </button>
        </article>
      </main>
    </Layout>
  );
};

export default Links;
