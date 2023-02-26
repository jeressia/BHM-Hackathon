import React from 'react'

import Navbar from '../Navbar/Navbar';
import UserCard from '../UserCard/UserCard';
import Chatbox from '../Chatbox/Chatbox';



function Home(props) {
  const { setLoggedIn, setQuizTaken, userData } = props;
  console.log("userData in home: ", userData)

  // const user = {
  //   userId: 1,
  //   username: 'wesSnipes',
  //   firstName: 'Wesley',
  //   lastName: 'Snipes',
  //   userStatus: 'Finance Newbie',
  //   userImgUrl: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQoNG-jW5p2OrTrpjk-DMtQlic1W2EWuh-QNKpNJTocQUrWPxt8AxtdCnwkXNVbDm2OYAD2dAOTAQzXR3Q'
  // }

  return (
    <div className="Home">
      <div className="left-nav">
        <Navbar setQuizTaken={setQuizTaken} setLoggedIn={setLoggedIn} />
      </div>
      <div className='left-area'>Task Area Goes Here</div>
      <div className='middle-area'><UserCard userData={userData} /></div>
      <div className='right-area'><Chatbox /></div>
    </div>
  )
}

export default Home