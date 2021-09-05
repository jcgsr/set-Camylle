import React from 'react'
import {StaticImage} from "gatsby-plugin-image"

import Layout from '../components/layout'
import Seo from '../components/seo'

const Supervisao = () => {
  return (
    <Layout>
      <Seo title="Supervisão Profissional" description="Página sobre Supervisão Profissional" />
    <main>
      <article className="card">
        <StaticImage src="../assets/images/fale.jpg" layout='constrained' placeholder="tracedSVG" alt="Camylle ao telefone"/>

        <h1>fale conosco</h1>
             
      </article>
      
    </main>
    </Layout>
  )
}

export default Supervisao
