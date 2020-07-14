import React from 'react'
import Child from './ChildDirect'

export default props => 
  <div>
    <Child {...props}>Alexandre</Child>
    <Child lastname={props.lastname}>Felipe</Child>
    <Child lastname="Madruga">Ricardo</Child>
    <Child lastname="Madruga">Fernando</Child>
    <Child lastname="Madruga">Arthur</Child>
  </div>