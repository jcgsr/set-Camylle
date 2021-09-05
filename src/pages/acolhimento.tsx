import React from 'react'
import {StaticImage} from "gatsby-plugin-image"

import Layout from '../components/layout'
import Seo from '../components/seo'

const Acolhimento = () => {
  return (
    <Layout>
      <Seo title="Acolhimento" description="Página sobre Acolhimento" />
    <main>
      <article className="card">
        <StaticImage src="../assets/images/acolhimento.jpg" layout='constrained' placeholder="tracedSVG" alt="Camylle ao telefone"/>

        <h1>acolhimento</h1>
        <p>É comum para os pais, ao identificarem alguns sinais de atraso no desenvolvimento do seu filho, ficarem confusos sobre qual atitude tomar. Devo esperar um pouco e ver se com o tempo meu filho alcança o desenvolvimento natural? Ele ainda não é muito novo para eu me preocupar seriamente com esta questão? Devo deixá-lo trilhar seu próprio ritmo e buscar ajuda profissional somente em último recurso?</p>
        <p>Muitos são os questionamentos e as dúvidas que assolam os pais quando vistos neste tipo de situação e embora seja verdade que não existe um relógio temporal que dita especificamente que tipo de habilidade cada criança deva exibir em determinado tempo, é conhecido e sustentado pela comunidade científica que toda criança deve possuir habilidades específicas dentro de sua faixa etária. Quando essas habilidades não estão presentes no repertório da criança é aconselhável que um profissional capacitado seja acionado o mais cedo possível para que a criança possa ser beneficiada rapidamente de um apoio especializado.

</p>
        <p>Embora a realização de intervenção especializada nos primeiros anos de vida da criança não traga nenhum tipo de desvantagem, o contrário não pode ser dito e diversos estudos comprovam os inúmeros benefícios que a intervenção precoce traz para as crianças com atraso no desenvolvimento. A análise do comportamento aplicada é uma das abordagens mais indicadas para esse tipo de trabalho com esse público específico, pois aplica intervenções baseadas nos princípios da teoria da aprendizagem de forma sistemática com o intuito de promover comportamentos socialmente significantes.</p>
        <p>Ficou curioso e quer saber mais sobre ABA e intervenção precoce? Agende uma sessão de acolhimento, sem compromisso, e iremos explicar o nosso trabalho e ouvir suas dúvidas para conversarmos sobre como podemos acolher sua demanda.</p>
      </article>
      
    </main>
    </Layout>
  )
}

export default Acolhimento
