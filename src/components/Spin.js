import React, { Component } from 'react'
import ZKZx from './ZKZx.gif'
export class Spin extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={ZKZx} alt="loading"/>
      </div>
    )
  }
}

export default Spin
