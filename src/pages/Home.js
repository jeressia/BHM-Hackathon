import React from 'react'

import Navbar from '../Navbar/Navbar';
import Chatbox from '../Chatbox/Chatbox.js'


function Home(props) {
  const { setQuizTaken, setLoggedIn } = props;

  return (
    <div className="Home">
      <div className="left-nav">
        <Navbar setQuizTaken={setQuizTaken} setLoggedIn={setLoggedIn} />
      </div>
      <div className='left-area'>Task Area Goes Here</div>
      <div className='middle-area'>User Card + Game Area Goes Here</div>
      <div className='right-area'><Chatbox /></div>
    </div>
  )
}

export default Home