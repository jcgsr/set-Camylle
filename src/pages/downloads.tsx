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
      <section className="card">
        {" "}
        <StaticImage
          src="../assets/images/apostila.png"
          layout="constrained"
          placeholder="tracedSVG"
          alt="Apostila"
        />
        <h1>Downloads</h1>
        <a className="btn" target="new" href="camylle-material.pdf">
          Apostila de Habilidades Emocionais
        </a>
      </section>
    </main>
  </Layout>
);

export default Downloads;
