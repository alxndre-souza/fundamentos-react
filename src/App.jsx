import React from 'react'

import Card from './components/layout/card'

import First from './components/basics/firstComponent'
import ComponentArrow from './components/basics/arrowFunction'
import ComParametro from './components/basics/props'
import ComFilhos from './components/basics/withChildren'
import Repeticao from './components/basics/repetition'  
import Condicional from './components/basics/condicional'
import CondicionalComIf from './components/basics/conditionalWithIf'

import "./app.css"


export default (props) => (

  <div className="app">

    <Card title="#01 - Primeiro componente">
      <First />
    </Card>

    <Card title="#02 - Componente com arrow">
      <ComponentArrow />
    </Card>

    <Card title="#03 - Componente com parâmetro">
      <ComParametro       
        title="Esse é o título"
        subtitle="E esse é o subtitle" />
      <ComParametro       
        title="Opa, de novo?"
        subtitle="Epa, mesmo componente" />
    </Card>

    <Card title="#04 - Com filhos">  
      <ComFilhos>
        <ul>
          <li>Alexandre</li>
          <li>Marlon</li>
          <li>Guilherme</li>
          <li>Cirilo</li>
        </ul>
      </ComFilhos>
    </Card>

    <Card title="#05 - Repetição">
      <Repeticao></Repeticao>
    </Card>

    <Card title="#06 - Condicional v1">
      <Condicional number={10} ></Condicional>
    </Card>

    <Card title="#07 - Condicional v2 com if ">
      <CondicionalComIf number={11} ></CondicionalComIf>
    </Card>

  </div>

)