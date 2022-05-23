import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Apostila = () => {
  return (
    <Layout>
      <Seo title="Apostila" description="Apostila De Painéis Temáticos" />
      <main>
        <article className="card">
          <StaticImage
            src="../assets/images/apostila.jpeg"
            layout="constrained"
            placeholder="tracedSVG"
            alt="Capa da Apostila Paineis Temáticos"
          />

          <h1>Apostila Paineis Temáticos</h1>
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
            href="https://www.hotmart.com/product/apostila-de-paineis-tematicos/I67840014C"
            target="_blank"
            rel="noopener"
          >
            <button className="btn-apostila">Comprar Apostila</button>
          </a>
        </div>
        <hr id="hrApostila" />

        <article className="card">
          <StaticImage
            src="../assets/images/apostila2.jpeg"
            layout="constrained"
            placeholder="tracedSVG"
            alt="Capa da Apostila TATO Nomeação"
          />

          <h1>Apostila TATO Nomeação</h1>
          <p>
            Esta é uma apostila com 154 ilustrações de figuras divididos em 10
            classes de categorias para a estimulação do Domínio do
            desenvolvimento TATO nomeação. .
          </p>
          <p>
            Nela você poderá trabalhar com a criança áreas de tato; linguagem;
            comportamento de ouvinte e categorização.
          </p>
          <p>
            Ideal para terapeutas infantis e pais que queiram ter acesso a
            materiais educativos com foco no desenvolvimento global.
          </p>
          <p>Para adquiri-la, basta clicar no botão abaixo:</p>
        </article>
        <div className="apostila-container">
          <a
            href="https://hotmart.com/pt-br/marketplace/produtos/apostila-tato-nomeacao-nivel-1/M71006382E"
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
