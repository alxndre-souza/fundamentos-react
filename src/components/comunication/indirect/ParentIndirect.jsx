
import React, {useState} from 'react'
import ChildIndirect from './ChildIndirect'

export default props => {

  const[text, setText] = useState('Valor')
  const [num, setNum] = useState(0)

  function whenClick(genValue, text) {
    setNum(genValue)
    setText(text)
  }

  return (

    <div>
      <h4>{text}: {num} </h4>
      <ChildIndirect propClick={whenClick}></ChildIndirect>
    </div>
  )
}