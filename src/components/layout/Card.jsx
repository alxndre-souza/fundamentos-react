
import React from 'react'
import '../../assets/style/components/card.css'

export default props => 
  <div className="card" style={{borderColor: props.color || '#000'}}>
    <div className="content">
      {props.children}
    </div>
    <div className="footer" style={{backgroundColor: props.color || '#000'}} >
      {props.title}
    </div>
  </div>

  