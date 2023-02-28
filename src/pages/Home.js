import React from 'react'

import Navbar from '../App/Navbar/Navbar';
import UserCard from '../App/UserCard/UserCard';
import Chatbox from '../App/Chatbox/Chatbox';
import Challenges from '../App/Challenges/Challenges';
import Game from '../App/Game/Game';


function Home(props) {
  const { setLoggedIn, setQuizTaken, userData } = props;

  return (
    <div className="Home">
      <div className="left-nav">
        <Navbar setQuizTaken={setQuizTaken} setLoggedIn={setLoggedIn} />
      </div>
      <div className='left-area'><Challenges /></div>
      <div className='middle-area'>
        <UserCard userData={userData} />
        <Game />
      </div>
      <div className='right-area'><Chatbox /></div>
    </div>
  )
}

export default Home