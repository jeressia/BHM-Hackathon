import { useState } from 'react';
import React from 'react'

import SelectUSState from 'react-select-us-states';


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
      <p>
        Select a state: <SelectUSState id="myId" className="myClassName" onChange={(e) => {
          setUserData({ ...userData, state: e })
        }} />
      </p>
      <p>What is your greatest financial at the moment?</p>
      <input type="radio" name="motivation" value="1" id="" onChange={(e) => {
        setUserData({ ...userData, keyMotivationId: e.target.value })
      }} />Purchase a House/Car
      <input type="radio" name="motivation" value="2" id="" onChange={(e) => {
        setUserData({ ...userData, keyMotivationId: e.target.value })
      }} />Becoming debt free
      <input type="radio" name="motivation" value="3" id="" onChange={(e) => {
        setUserData({ ...userData, keyMotivationId: e.target.value })
      }} />Increase your credit
      <input type="radio" name="motivation" value="4" id="" onChange={(e) => {
        setUserData({ ...userData, keyMotivationId: e.target.value })
      }} />Saving Money
      <input type="radio" name="motivation" value="5" id="" onChange={(e) => {
        setUserData({ ...userData, keyMotivationId: e.target.value })
      }} />Sticking to a budget
      <input type="radio" name="motivation" value="6" id="" onChange={(e) => {
        setUserData({ ...userData, keyMotivationId: e.target.value })
      }} />Creating a new stream of income
      <input type="radio" name="motivation" value="7" id="" onChange={(e) => {
        setUserData({ ...userData, keyMotivationId: e.target.value })
      }} />Retiring Early
    </div >
  )
}

export default Quiz