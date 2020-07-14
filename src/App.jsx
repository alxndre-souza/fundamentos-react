import React from 'react'

import Card from './components/layout/card'

import First from './components/basics/firstComponent'
import ComponentArrow from './components/basics/arrowFunction'
import ComParametro from './components/basics/properties'
import ComFilhos from './components/basics/withChildren'
import Repeticao from './components/basics/repetition'  
import Condicional from './components/basics/condicional'
import CondicionalComIf from './components/basics/conditionalWithIf'
import PaiDireta from './components/comunicacao/direta/PaiDireta'
import PaiIndireta from './components/comunicacao/indireta/PaiIndireta'
import Input from './components/form/input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

import "./app.css"


export default (props) => (

  <div className="app">

    <h1>Fundamentos de React</h1>

    <div className="cards">

      <Card title="#01 - Primeiro componente" color="#F38630">
        <First />
      </Card>

      <Card title="#02 - Componente com arrow" color="#542733">
        <ComponentArrow />
      </Card>

      <Card title="#03 - Componente com parâmetro" color="#28ABE3">
        <ComParametro       
          title="Esse é o título"
          subtitle="E esse é o subtitle" />
        <ComParametro       
          title="Opa, de novo?"
          subtitle="Epa, mesmo componente" />
      </Card>

      <Card title="#04 - Com filhos" color="#588C73">  
        <ComFilhos>
          <ul>
            <li>Alexandre</li>
            <li>Marlon</li>
            <li>Guilherme</li>
            <li>Cirilo</li>
          </ul>
        </ComFilhos>
      </Card>

      <Card title="#05 - Repetição" color="#DC403B">
        <Repeticao></Repeticao>
      </Card>

      <Card title="#06 - Condicional v1" color="#75EB00">
        <Condicional number={10} ></Condicional>
      </Card>

      <Card title="#07 - Condicional v2 com if " color="#FF85CB">
        <CondicionalComIf number={11} ></CondicionalComIf>
      </Card>

      <Card title="#08 - Comunicação direta " color="#FFCA00">
        <PaiDireta sobrenome="Souza"></PaiDireta>
      </Card>

      <Card title="#09 - Comunicação indireta " color="#1352A2">
        <PaiIndireta sobrenome="Souza"></PaiIndireta>
      </Card>

      <Card title="#10 - Input " color="#69D2E7">
        <Input></Input>
      </Card>

      <Card title="#11 - Contador " color="#5A6A62">
        <Contador></Contador>
      </Card>

      <Card title="#12 - Mega" color="#5A0062">
        <Mega qtdeNumeros={8}></Mega>
      </Card>

    </div>

  </div>

)