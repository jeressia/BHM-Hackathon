import { useState } from 'react';


export default function Challenges() {
  const [challengeCount, setChallengeCount] = useState(0);
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
  return (
    <div>
      <p>All Challenges</p>
      <h1>Challenges ({challengeCount})</h1>
      <h2>All Tasks</h2>
    </div>
  )
}
