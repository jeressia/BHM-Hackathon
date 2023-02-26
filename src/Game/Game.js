import React from 'react'

import './Game.css';

function Game() {
  return (
    <div className='Game'>
      <img src="lady.svg" className="character" id="character" alt="gameboard" />
      <img src="gameboard.png" alt="gameboard" />
    </div>
  )
}

export default Game