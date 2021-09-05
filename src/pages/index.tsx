// 04.09.2019 - Reescrevendo site em Gatsby de Camylle em Typescript

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" description="Site de Camylle Azevedo" />
    <StaticImage
      src="../assets/images/capa.jpg"
      layout="constrained"
      placeholder="tracedSVG"
      alt="Camylle Azevedo"
    />
  </Layout>
)

export default IndexPage
