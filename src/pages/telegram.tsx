import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

// import { FaTelegramPlane } from "react-icons/fa";

const Telegram = () => {
  return (
    <Layout>
      <Seo
        title="Telegram"
        description="Página do canal do Telegram de Camylle"
      />
      <main>
        <article className="card">
          <StaticImage
            src="../assets/images/telegram.jpeg"
            layout="constrained"
            placeholder="tracedSVG"
            alt="Telegram de Camylle"
          />

          <h1>Canal do Telegram</h1>
          {/* <section className="contatos" >
         <a style={{textAlign: "center", margin: "0 auto"}} href="https://t.me/joinchat/X4se-jbr9as5MDUx">
           <FaTelegramPlane />
         </a>
        </section> */}
        </article>
      </main>
    </Layout>
  );
};

export default Telegram;
