import React from 'react'

import './UserCard.css';

function UserCard(props) {
  const { user } = props
  return (
    <div className='UserCard'>
      <div className='left-user-card'>
        <img alt="user" class="userImg" src={user.userImgUrl} />
      </div>
      <div className='right-user-card'>
        <p className='usercard-username'>{user.firstName} {user.lastName} | <span className='usercard-atname'>@{user.username}</span></p>
        <p className='usercard-status'>{user.userStatus}</p>
      </div>
    </div>
  )
}

export default UserCard