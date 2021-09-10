import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import { StaticImage } from "gatsby-plugin-image";

const Downloads = () => (
  <Layout>
    <Seo
      title="Downloads"
      description="Página de Downloads do material em PDF de Camylle"
    />
    <main>
      <section>
        {" "}
        <h1>Downloads</h1>
        <main className="container">
          <div className="galeria">
            <a className="btn" target="new" href="camylle-material.pdf">
              <StaticImage
                src="../assets/images/apostila.png"
                alt="Apostila"
                placeholder="tracedSVG"
                layout="constrained"
              />
              <div className="apostila">
                <span>Apostila De Habilidades Emocionais</span>
              </div>
            </a>
            <a className="btn" target="new" href="camylle-listadecompras.pdf">
              <StaticImage
                src="../assets/images/mercado.png"
                alt="Apostila"
                placeholder="blurred"
                layout="constrained"
              />{" "}
              <div className="apostila">
                <span>Lista de Mercado</span>
              </div>
            </a>
          </div>
        </main>
      </section>
    </main>
  </Layout>
);

export default Downloads;
