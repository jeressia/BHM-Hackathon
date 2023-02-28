import { useState } from 'react';
import './Challenges.css'

function CheckTask(props) {
  return (
      <div className="challenges-checkbox" key={props.taskIndex}>
        <label htmlFor={props.challenge.challengeTitle} className={`task-parent ${props.challenge.isComplete ? 'is-complete' : ''}`}>
          <input 
          type="checkbox" 
          checked={props.challenge.isComplete} 
          value={props.challenge.challengeTitle} 
          />
          {props.challenge.challengeTitle}
        </label>
        {
          props.challenge.subTasks.map((subtask, index) => {
            return (
              <div className="subtask-checkbox" key={index}>
                <label htmlFor=""  className={`task-child ${subtask.isComplete ? 'is-complete' : ''}`}>
                  <input 
                  type="checkbox" 
                  checked={subtask.isComplete} 
                  />
                  {subtask.subtaskTitle}
                </label>
              </div>
            )
          })
        }
      </div>
  )
}

export default function Challenges() {
  const [challenges, setChallenges] = useState(
    [
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
        isComplete: true,
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
    ]
  )

  const [challengeCount, setChallengeCount] = useState(0);

  return (
    <div>
      <div className="challenges-section">
        <p>All Challenges</p>
        <h1>Challenges ({challengeCount})</h1>
        <h2>All Tasks</h2>
        <form className='challenges-checklist'>
          {
            challenges.map((challenge, index) => {
              return <CheckTask key={index} taskIndex={index} challenge={challenge} />
            })
          }
        </form>
      </div>
    </div>
  )
}
