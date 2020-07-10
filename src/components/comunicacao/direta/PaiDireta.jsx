import React from 'react'
import Filho from './FilhoDireta'

export default props => 
  <div>
    <Filho {...props}>Alexandre</Filho>
    <Filho sobrenome={props.sobrenome}>Felipe</Filho>
    <Filho sobrenome="Madruga">Ricardo</Filho>
    <Filho sobrenome="Madruga">Fernando</Filho>
    <Filho sobrenome="Madruga">Arthur</Filho>
  </div>