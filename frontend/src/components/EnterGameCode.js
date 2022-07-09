import React from 'react'
import { Link } from 'react-router-dom'

function EnterGameCode() {
  return (
    <div className='enterCode'>
        <input type='text' value='Name'/><br/>
        <input type='text' value='Room Code'/><br/>
        <div className='enterCode-startButtonContainer'>
          <Link to={'/'}><button id='enterCode-startGameButton'>START GAME</button></Link>
        </div>
    </div>
  )
}

export default EnterGameCode