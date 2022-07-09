import React from 'react'
import { Link } from 'react-router-dom'

function EnterName() {
  return (
    <div className='enterName'>
      <input type='text' value='Name'/><br/>
      <h4 className='enterName-title'>Your name code is:</h4>
      <h4 className='enterName-code'>HSJD</h4>
      <div className='enterName-startButtonContainer'>
          <Link to={'/'}><button id='enterName-startGameButton'>START GAME</button></Link>
        </div>
    </div>
  )
}

export default EnterName