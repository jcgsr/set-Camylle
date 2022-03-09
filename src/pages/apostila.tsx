import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Apostila = () => {
  return (
    <Layout>
      <Seo title="Apostila" description="Página sobre Apostila" />
      <main>
        <article className="card">
          <StaticImage
            src="../assets/images/apostila.jpeg"
            layout="constrained"
            placeholder="tracedSVG"
            alt="Capa da Apostila ABA"
          />

          <h1>Apostila</h1>
          <p>
            Esta apostila foi elaborada para agilizar e facilitar a intervenção
            do terapeuta ABA no DOMÍNIO PERCEPÇÃO VISUAL (nível intermediário).
          </p>
          <p>
            O terapeuta terá 20 estímulos e mais de 100 imagens, que poderão ser
            impressas para trabalhar as habilidades de: percepção visual;
            linguagem e narrativa. Esse material permite uma escala de opções
            que oportuniza a execução de 1 mês de atividades variadas com a área
            de desenvolvimento destacada para o marco percepção visual.
          </p>
          <p>
            Mais comodidade e variabilidade para sua intervenção ABA em um
            material de riquíssima qualidade visual.
          </p>
          <p>Para adquiri-la, basta clicar no botão abaixo:</p>
        </article>
        <div className="apostila-container">
          <a
            href="https://www.hotmart.com/pt-BR?gclid=CjwKCAiAvaGRBhBlEiwAiY-yMEaGpoiF61AsAAZM0hB0AGTelCfRzHWtZiqfnWzwrsMWtvVugV2amxoC7d0QAvD_BwE"
            target="_blank"
            rel="noopener"
          >
            <button className="btn-apostila">Comprar Apostila</button>
          </a>
        </div>
      </main>
    </Layout>
  );
};

export default Apostila;
