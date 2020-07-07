import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/Primeiro'
import Component from './components/Component-arrow'
import ComParametro from './components/ComParametro'

ReactDOM.render(
  <div>
    <Primeiro />
    <Component />
    <ComParametro       
      titulo="Esse é o título"
      subtitulo="E esse é o subtitulo" />
    <ComParametro       
      titulo="Opa, de novo?"
      subtitulo="Epa, mesmo componente" />
  </div>,
  document.getElementById('root')
)
