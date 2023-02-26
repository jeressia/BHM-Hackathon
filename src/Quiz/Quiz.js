import { useState } from 'react';
import React from 'react'

function Quiz() {
  const [userData, setUserData] = useState({})
  console.log("userData: ", userData)
  return (
    <div>
      <p>Chatbox Introduces himself</p>
      <p>Let’s start by getting your name! You are?</p>
      <label htmlFor="firstName">First Name</label>
      <input name="firstName" onBlur={(e) => { setUserData({ ...userData, firstName: e.target.value }) }}
      />
      <label htmlFor="lastName">Last Name</label><input name="lastName" onBlur={(e) => { setUserData({ ...userData, lastName: e.target.value }) }}></input>

      <p>Great. Nice to meet you, {userData.firstName}. When is your birthday?</p>
      <input
        type="date"
        onChange={(e) => { setUserData({ ...userData, dateOfBirth: e.target.value }) }}
      />
    </div >
  )
}

export default Quiz