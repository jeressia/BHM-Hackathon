import React from 'react'

import Navbar from '../Navbar/Navbar';
import UserCard from '../UserCard/UserCard';
import Chatbox from '../Chatbox/Chatbox';
import Game from '../Game/Game.js'


function Home(props) {
  const { setLoggedIn, setQuizTaken, userData } = props;

  return (
    <div className="Home">
      <div className="left-nav">
        <Navbar setQuizTaken={setQuizTaken} setLoggedIn={setLoggedIn} />
      </div>
      <div className='left-area'>Task Area Goes Here</div>
      <div className='middle-area'><UserCard userData={userData} />
        <Game />
      </div>
      <div className='right-area'><Chatbox /></div>
    </div>
  )
}

export default Home