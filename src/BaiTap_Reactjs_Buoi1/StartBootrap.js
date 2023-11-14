import React, { Component } from 'react'

export default class StartBootrap extends Component {
  render() {
    return (
      <div className='p-3 bg-dark text-white'>
        <div className='container d-flex justify-content-between'>
          <a>Start Bootstrap</a>
          <ul>
            <a><span className='p-2'>Home</span></a>
            <a><span className='p-2 text-secondary'>About</span></a>
            <a><span className='p-2 text-secondary'>Service</span></a>
            <a><span className='p-2 text-secondary'>Contact</span></a>
          </ul>
        </div>
      </div>
    )
  }
}
