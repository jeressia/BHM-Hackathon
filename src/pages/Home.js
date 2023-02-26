import React from 'react'
import { useNavigate } from 'react-router-dom';

import Chatbox from '../Chatbox/Chatbox.js'

function Home(props) {
  const navigate = useNavigate();

  const { setQuizTaken, setLoggedIn } = props;
  return (
    <div className="Home">
      <div className="left-nav">
        <button className="btn" onClick={() => {
          setLoggedIn(false)
          setQuizTaken(true)
          navigate(-1)
        }}>
          Log out
        </button></div>
      <div className='left-area'>Task Area Goes Here</div>
      <div className='middle-area'>User Card + Game Area Goes Here</div>
      <div className='right-area'><Chatbox /></div>
    </div>
  )
}

export default Home