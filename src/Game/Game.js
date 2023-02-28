import { useState } from 'react'

import './Game.css';

const Game = (props) => {
  const { userData } = props;
  const [gameLevels, setGameLevels] = useState([
    {
      id: 1,
      name: 'LVL 1',
      percentToComplete: 10,
      isComplete: false
    },
    {
      id: 2,
      name: 'LVL 2',
      percentToComplete: 15,
      isComplete: false
    },
    {
      id: 3,
      name: 'LVL 3',
      percentToComplete: 15,
      isComplete: false
    },
    {
      id: 4,
      name: 'LVL 4',
      percentToComplete: 20,
      isComplete: false
    },
    {
      id: 5,
      name: 'LVL 5',
      percentToComplete: 25,
      isComplete: false
    }
  ])
  const [progressPercent, setProgressPercent] = useState(0);

  return (
    <div className="Game">
      <h1>{userData.userStatus}</h1>
      <div className='all-levels'>
        {gameLevels.map((level) => {
          return (
            <div className='level'>
              <div className="level-indicator">{level.name}</div>
              <progress role="progressbar" max={level.percentToComplete} value={level.isComplete ? level.percentToComplete : progressPercent}>
              </progress>
            </div>
          )
        })}
      </div>
    </div >
  )
}
export default Game