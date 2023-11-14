import React, { Component } from 'react'
import StartBootrap from './StartBootrap'
import CardTiltle from './CardTiltle'
import AWarmWelcome from './AWarmWelcome'
import Footer from './Footer'

export default class BaiTap_Reactjs_Buoi1 extends Component {
  render() {
    return (
        
      <div>
        <StartBootrap/>
        <div className='col-1'>
            <div className='col-6'>
                <AWarmWelcome/>
            </div>
            <div><CardTiltle/></div>
            <div><Footer/></div>
        </div>
        </div>
    )
  }
}
