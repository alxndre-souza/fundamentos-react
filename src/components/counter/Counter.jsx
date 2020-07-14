import React, { Component } from 'react'
import Display from './Display'
import RateForm from './RateForm'
import Buttons from './Buttons'

import '../../assets/style/components/counter.css'

export default class Counter extends Component {

  state = {
    rate: this.props.rate || 1,
    value: this.props.value || 0,
  }

  inc = () => {
    this.setState({
      value: this.state.value + this.state.rate
    })
  }

  dec = () => {
    this.setState({
      value: this.state.value - this.state.rate
    })
  }

  changeRate = (newRate) => {
    this.setState({
      rate: newRate
    })
  }

  render() {
    return (

      <div className="counter">
        <h2>Contador</h2>

        <RateForm rate={this.state.rate} onRateChange={this.changeRate}></RateForm>

        <Display value={this.state.value}></Display>

        <Buttons onInc={this.inc} onDec={this.dec}></Buttons>

      </div>
    )
  }
}

