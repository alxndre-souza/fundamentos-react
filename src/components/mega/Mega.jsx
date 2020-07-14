import React, {useState} from 'react'

export default (props) => {

  const [ numbers, setNumbers ] = useState(Array(props.sizeNumber).fill(0))

  function genRandomNumber(array) {
    const min = 1
    const max = 60
    const newNumber = parseInt(Math.random() * (max - min)) + min
      return array.includes(newNumber) ? genRandomNumber(array) : newNumber
  }

  function genNumber() {
    const newArray = Array(props.sizeNumber)
      .fill(0)
      .reduce((a, e) => {
        const newNumber = genRandomNumber(a)
        return [...a, newNumber]
      }, [])
      .sort((a, b) => a - b)
    setNumbers(newArray)
  }

  return (
    <>
      <h3>Mega</h3>
      <h4>{numbers.join(' ')}</h4>
      <button onClick={genNumber}>Gerar Números</button>
    </>
  )
}