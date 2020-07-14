import React from 'react'

export default (props) => {

  return (
    <div>

      <label htmlFor="rateInput">Passo:</label>

      <input id="rateInput" type="number"
        value={props.rate}
        onChange={e => props.onRateChange(+e.target.value)} />
        
    </div>
  );
};