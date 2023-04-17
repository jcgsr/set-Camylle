import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Supervisao = () => {
  return (
    <Layout>
      <Seo
        title="Supervisão Profissional"
        description="Página sobre Supervisão Profissional"
      />
      <main>
        <article className="card">
          <StaticImage
            src="../assets/images/supervisao.jpeg"
            layout="constrained"
            placeholder="tracedSVG"
            alt="Camylle ao telefone"
          />

          <h1>supervisão profissional</h1>
          <p>
            O serviço de supervisão profissional busca qualificar, direcionar e
            orientar profissionais da área de Análise do Comportamento que estão
            no início da carreira para que os mesmos desenvolvam habilidades não
            somente relacionadas à prática profissional em excelência, mas
            também dar subsídios para que os mesmos tenham ferramentas de gestão
            e promoção do seu trabalho de maneira que possam ter o melhor ajuste
            entre a teoria e o mercado de trabalho.
          </p>
        </article>
      </main>
    </Layout>
  );
};

export default Supervisao;
