import { useState } from 'react'

import './Game.css';

const Game = (props) => {
  const { userData } = props;
  const [progressPercent, setProgressPercent] = useState(25);
  return (
    <div className="Game">
      <h1>{userData.userStatus}</h1>
      <div className="level-indicator">LVL 1</div>
      <progress role="progressbar" max="100" value={progressPercent}>
      </progress>
    </div>
  )
}
export default Game