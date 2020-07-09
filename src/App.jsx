import React from 'react'
import Primeiro from './components/Primeiro'
import ComponentArrow from './components/Component-arrow'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'
import "./App.css"


export default (props) => (

  <div className="App">

    <Card titulo="#01 - Primeiro componente">
      <Primeiro />
    </Card>

    <Card titulo="#02 - Componente com arrow">
      <ComponentArrow />
    </Card>

    <Card titulo="#03 - Componente com parâmetro">
      <ComParametro       
        titulo="Esse é o título"
        subtitulo="E esse é o subtitulo" />
      <ComParametro       
        titulo="Opa, de novo?"
        subtitulo="Epa, mesmo componente" />
    </Card>

    <Card titulo="#04 - Com filhos">  
      <ComFilhos>
        <ul>
          <li>Alexandre</li>
          <li>Marlon</li>
          <li>Guilherme</li>
          <li>Cirilo</li>
        </ul>
      </ComFilhos>
    </Card>

    <Card titulo="#05 - Repetição">
      <Repeticao></Repeticao>
    </Card>

    <Card titulo="#06 - Condicional v1">
      <Condicional numero={10} ></Condicional>
    </Card>

    <Card titulo="#07 - Condicional v2 com if ">
      <CondicionalComIf numero={11} ></CondicionalComIf>
    </Card>

  </div>

)