import React from 'react'

export default props => {

  function acao() {
    props.propriedadeDeClick(Math.random(), 'Gerado')
  }

  return (
    <div>
      <button onClick={acao}>
        Alterar
      </button>
    </div>
  )
}

// Segunda forma do mesmo componente

// export default props => {

//   return (
//     <div>
//       <button
//         onClick={
//           () => { props.propriedadeDeClick(Math.random(), 'Gerado') }}>
//         Alterar
//       </button>
//     </div>
//   )
// }