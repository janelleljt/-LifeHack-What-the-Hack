import React from 'react'
import myguy from '../images/myguy.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='.container'>
    <div className='home-login'>
        <h4 className='home-title'>EUROPAGAMES</h4>
        <img src={myguy} alt="" className='home-myguyimg'/>
        <h4 className='home-subtitle'>Grab a buddy and click a game to start!</h4>
        <div className='home-buttonSelect'>
          <Link to={'/joingame'}><button id='home-game1button'>Game 1</button></Link>
          <Link to={'/joingame'}><button id='home-game2button'>Game 2</button></Link>
          <Link to={'/joingame'}><button id='home-game3button'>Game 3</button></Link>
        </div>
    </div>
    </div>
  )  
}

export default Home