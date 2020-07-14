import React from 'react'

export default props => {

  function action() {
    props.propClick(Math.random(), 'Gerado')
  }

  return (
    <div>
      <button onClick={action}>
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