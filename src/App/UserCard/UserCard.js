import React from 'react'

import './UserCard.css';

function UserCard(props) {
  const { userData } = props
  return (
    <div className='UserCard'>
      <div className='left-user-card'>
        <img alt="user" className="userImg" src={userData.userImgUrl} />
      </div>
      <div className='right-user-card'>
        <p className='usercard-username'>{userData.firstName} {userData.lastName} | <span className='usercard-atname'>@{userData.username}</span></p>
        <p className='usercard-status'>{userData.userStatus}</p>
      </div>
    </div>
  )
}

export default UserCard