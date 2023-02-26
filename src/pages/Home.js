import React from 'react'
import Chatbox from '../Chatbox/Chatbox.js'

function Home() {
  return (
    <div className="Home">
      <div className="left-nav">Nav Bar Goes Here</div>
      <div className='left-area'>Task Area Goes Here</div>
      <div className='middle-area'>User Card + Game Area Goes Here</div>
      <div className='right-area'><Chatbox /></div>
    </div>
  )
}

export default Home