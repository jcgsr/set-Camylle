import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Cursos = () => {
  return (
    <Layout>
      <Seo title="Cursos" description="Página sobre Cursos" />
      <main>
        <article className="card">
          <StaticImage
            src="../assets/images/cursos.jpg"
            layout="constrained"
            placeholder="tracedSVG"
            alt="Camylle ao telefone"
          />

          <h1>cursos</h1>
          <p>
            <ul>
              <a
                className="cursos"
                href="https://ead.abamais.com/cursos/aprendizagem-sem-erro/"
              >
                <li>ABA: Aprendizagem sem Erro</li>
              </a>
              <li>Programa de Tutoria Profissional</li>
              <li>Mentoria Lapidação de Consultório</li>
            </ul>
          </p>
        </article>
      </main>
    </Layout>
  );
};

export default Cursos;
