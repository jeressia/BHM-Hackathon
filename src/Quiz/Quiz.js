import { useState } from 'react';
import React from 'react'

import SelectUSState from 'react-select-us-states';


function Quiz() {
  const [userData, setUserData] = useState({})
  console.log("userData: ", userData)
  return (
    <div>
      <p>Welcome to our financial help app! I'm Moneybot. I'm here to help you manage your money with a little bit of humor and a lot of practical advice. Let's get started and turn those financial frowns upside down!</p>
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
      <p>What is your greatest financial goal at the moment?</p>
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
      <p>I hope this is not too forward, but how much money do you have saved at the moment?</p>
      <input name="firstName" onBlur={(e) => { setUserData({ ...userData, moneySaved: e.target.value }) }}
      />
      <p>How much debt do you have? That includes credit cards, student loan, personal loans, and auto loans</p>
      <input name="firstName" onBlur={(e) => { setUserData({ ...userData, moneyOwed: e.target.value }) }}
      />
      <p>Do you know your current credit score?</p>
      <input name="firstName" onBlur={(e) => { setUserData({ ...userData, creditScore: e.target.value }) }}
      /><a href='http://www.creditkarma.com' target="_blank" rel="noopener noreferrer">No, I don't know my credit score.</a>
      <p>What is your greatest financial at the moment?</p>
      <input type="radio" name="userStatus" value="1" id="" onChange={(e) => {
        setUserData({ ...userData, userStatusId: e.target.value })
      }} />Finance Newbie
      <input type="radio" name="userStatus" value="2" id="" onChange={(e) => {
        setUserData({ ...userData, userStatusId: e.target.value })
      }} />Average
      <input type="radio" name="userStatus" value="3" id="" onChange={(e) => {
        setUserData({ ...userData, userStatusId: e.target.value })
      }} /> Money Master
    </div >
  )
}

export default Quiz