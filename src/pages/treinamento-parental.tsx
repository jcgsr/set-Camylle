import React from 'react'
import {StaticImage} from "gatsby-plugin-image"

import Layout from '../components/layout'
import Seo from '../components/seo'

const Treinamento = () => {
  return (
    <Layout>
      <Seo title="Treinamento Parental" description="Página sobre Treinamento Parental" />
    <main>
      <article className="card">
        <StaticImage src="../assets/images/clients.jpg" layout='constrained' placeholder="tracedSVG" alt="Camylle ao telefone"/>

        <h1>treinamento parental</h1>
        <p>O Treinamento Parental é um conjunto de orientações realizadas pelo terapeuta em sessões com os pais, responsáveis ou cuidadores do paciente em tratamento. Essas sessões podem ser focadas em comportamento, comunicação, psicoeducação ou para fatores específicos como problemas relacionados ao sono, alimentação ou rotinas individuais, por exemplo. A eficácia desse tipo de metodologia está descrita na literatura com resultados positivos, especialmente para pacientes do TEA.
</p>
        <p>O serviço consiste em 2 sessões por mês com duração de 02hrs cada e em cada sessão serão feitos questionários pré-intervenção com o intuito de mapear as demandas de orientação e ao final da sessão materiais de suporte para o feedback da intervenção.</p>
         
      </article>
      
    </main>
    </Layout>
  )
}

export default Treinamento
