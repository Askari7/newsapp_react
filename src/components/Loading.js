import React, { Component } from 'react'
import Snake from './Snake.gif'
export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img  src={Snake} alt="Loading" />
      </div>
    )
  }
}
