import React from 'react'

import Navbar from '../Navbar/Navbar';
import UserCard from '../UserCard/UserCard';
import Chatbox from '../Chatbox/Chatbox';
import Game from '../Game/Game';
import Challenges from '../App/Challenges/Challenges';


function Home(props) {
  const { setLoggedIn, setQuizTaken, userData } = props;

  return (
    <div className="Home">
      <div className="left-nav">
        <Navbar setQuizTaken={setQuizTaken} setLoggedIn={setLoggedIn} />
        <div className='left-area'>
          <Challenges />
        </div>
        <div className='middle-area'>
          <UserCard userData={userData} />
          <Game userData={userData} />
        </div>
        <div className='right-area'>
          <Chatbox />
        </div>
      </div >
    </div >
  )
}

export default Home