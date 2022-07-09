import React from 'react'
import myguy from '../images/myguy.png'
import { Link } from 'react-router-dom'

function JoinGame() {
  return (
    <div className='joinGame'>
      <h4 className='joinGame-title'>Countdown</h4>
      <img src={myguy} alt="" className='joinGame-logo'/>
      <h4 className='joinGame-subtitle'>Short blurb about countdown and how to play the game </h4>
      <div className='home-buttonSelect'>
          <Link to={'/entergamecode'}><button id='joinGame-joinGameButton'>JOIN GAME</button></Link>
          <Link to={'/entername'}><button id='joinGame-newGameButton'>START NEW GAME</button></Link>
        </div>
    </div>
  )
}

export default JoinGame