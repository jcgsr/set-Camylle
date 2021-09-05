import React from 'react'
import {StaticImage} from "gatsby-plugin-image"

import Layout from '../components/layout'
import Seo from '../components/seo'

const ABA = () => {
  return (
    <Layout>
      <Seo title="Intervenção ABA Intensiva" description="Página sobre Intervenção ABA Intensiva" />
    <main>
      <article className="card">
        <StaticImage src="../assets/images/intervencao.jpg" layout='constrained' placeholder="tracedSVG" alt="Camylle ao telefone"/>

        <h1>intervenção aba intensiva</h1>
        <p>Nossa equipe oferece o serviço de suporte intensivo da terapia comportamental baseado nos princípios da Análise do Comportamento Aplicada com o objetivo de obter mudanças nos comportamentos da criança de tal forma que esses (a) adquiram uma função mais adaptativa, (b) sejam generalizáveis para uma diversidade maior de ambientes e (c) que sejam mantidos ao longo do tempo. As intervenções são individualizadas, sistemáticas, bem estruturadas e com escopo conceitual sólido e possuem a melhor evidência empírica de sucesso, constituindo-se assim como padrão ouro no tratamento do autismo.
</p>
        <p>O processo de implementação da terapia intensiva tem 4 fases.</p>
        <p>
          <ol>
            <li>Avaliação</li>
            <li>Seleção (prospecção de currículos e entrevista com candidatos) e Treinamento Teórico de AT (mini-curso).</li>
            <li>Treinamento Prático do AT (esse acontece com a criança e dura 1 mês, a equipe faz o acompanhamento do AT com a criança de forma intensiva).</li>
            <li>Início da Terapia ABA estruturada (de 10 a 15hrs de intervenção intensiva semanal com AT + 02hrs de supervisão semanal com o AT e a criança + 02hrs de reunião mensal de equipe e 01hr de reunião mensal com a família)</li>
          </ol>
        </p>
        <p>Também faz parte da psicoterapia serviços de apoio familiar e de intervenção externa que visam o trabalho terapêutico nos ambientes distintos em que a criança está inserida como a orientação parental, reunião com os pais e visita escolar. Esses serviços buscam alinhar as ações praticadas durante a psicoterapia em contextos mais amplos que o do consultório com o intuito de maximizar os ganhos das intervenções psicológicas para outras esferas da vida da criança.</p>
      </article>
      
    </main>
    </Layout>
  )
}

export default ABA
