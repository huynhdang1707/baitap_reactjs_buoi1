import React, { Component } from 'react'
import StartBootrap from './StartBootrap'

import AWarmWelcome from './AWarmWelcome'
import Footer from './Footer'

export default class BaiTap_Reactjs_Buoi1 extends Component {
  render() {
    
      return (
        <div className='position-relative h-100'>
          <StartBootrap />
          <AWarmWelcome />
          <Footer />
          
        </div>
      )
    }
  }

