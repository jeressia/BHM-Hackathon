import { useState } from 'react';
import { Searchbar } from './Searchbar';
import "./Challenges.css"


export default function Challenges() {

  const [challenges, setChallenges] = useState([
    {
      id: 1,
      challengeTitle: 'Do this',
      isComplete: false,
      subTasks: [{
        id: 1,
        subtaskTitle: 'Subtask 1',
        isComplete: false,
      },
      {
        id: 2,
        subtaskTitle: 'Subtask 1',
        isComplete: false,
      },
      ]
    },
    {
      id: 2,
      challengeTitle: 'Do that',
      isComplete: false,
      subTasks: [{
        id: 1,
        subtaskTitle: 'Subtask 1',
        isComplete: true,
      },
      {
        id: 2,
        subtaskTitle: 'Subtask 1',
        isComplete: false,
      },
      ]
    }
  ])
  const [challengeCount, setChallengeCount] = useState(challenges.length);
  return (
    <div>
      <p className='challenges_subtitle'>All Challenges</p>
      <h1 className='challenges_title'>Challenges ({challengeCount})</h1>
      <div>
        <Searchbar />
      </div>
      <div className='search_bar_flex tasks'>
        <burger>
          <img src='https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-1024.png'
            alt='burger' className='burger' />
        </burger>
        <h2 className='tasks_title'>All Tasks</h2>
      </div>
    </div>
  )
}
