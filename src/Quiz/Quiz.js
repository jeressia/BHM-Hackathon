import * as React from 'react';
import { useState } from 'react';
import SelectUSState from 'react-select-us-states';
import { useNavigate } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';

import './Quiz.css'

const Quiz = (props) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const { setLoggedIn, userData, setUserData } = props;
  const [page, setPage] = useState(1);

  const handleNext = event => {
    event.preventDefault();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log({ userData });
    setPage(page + 1);
  };

  const handleBack = event => {
    event.preventDefault();
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    console.log({ userData });
    setPage(page - 1);
  };

  const renderPage = () => {
    switch (page) {
      case 1:
        return (
          <div>
            <h2>Welcome to MoneyBot!</h2>
            <p>Welcome to our financial help app! I'm Moneybot. I'm here to help you manage your money with a little bit of humor and a lot of practical advice. Let's get started and turn those financial frowns upside down!</p>
          </div>
        );
      case 2:
        return (
          <div>
            <p>Let’s start by getting your name! You are?</p>
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" onBlur={(e) => { setUserData({ ...userData, firstName: e.target.value }) }}
            />
            <label htmlFor="lastName">Last Name</label><input name="lastName" onBlur={(e) => { setUserData({ ...userData, lastName: e.target.value }) }}></input>
          </div>
        );
      case 3:
        return (
          <div>
            <p>Great. Nice to meet you, {userData.firstName}. When is your birthday?</p>
            <input
              type="date"
              onChange={(e) => { setUserData({ ...userData, dateOfBirth: e.target.value }) }}
            />
          </div>
        );
      case 4:
        return (
          <div>
            <p>
              Select a state: <SelectUSState id="myId" className="myClassName" onChange={(e) => {
                setUserData({ ...userData, state: e })
              }} />
            </p>
          </div>
        );
      case 5:
        return (
          <div>
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
          </div>
        );
      case 6:
        return (
          <div>
            <p>I hope this is not too forward, but how much money do you have saved at the moment?</p>
            <input name="firstName" onBlur={(e) => { setUserData({ ...userData, moneySaved: e.target.value }) }}
            />
          </div>
        );
      case 7:
        return (
          <div>
            <p>How much debt do you have? That includes credit cards, student loan, personal loans, and auto loans</p>
            <input name="firstName" onBlur={(e) => { setUserData({ ...userData, moneyOwed: e.target.value }) }}
            />
          </div>
        );
      case 8:
        return (
          <div>
            <p>Do you know your current credit score?</p>
            <input name="firstName" onBlur={(e) => { setUserData({ ...userData, creditScore: e.target.value }) }}
            /><a href='http://www.creditkarma.com' target="_blank" rel="noopener noreferrer">No, I don't know my credit score.</a>
          </div>
        );
      case 9:
        return (
          <div>
            <p>How comfortable are you with your finances right now?</p>
            <input type="radio" name="userStatus" value="1" id="" onChange={(e) => {
              setUserData({ ...userData, userStatusId: e.target.value })
            }} />Finance Newbie
            <input type="radio" name="userStatus" value="2" id="" onChange={(e) => {
              setUserData({ ...userData, userStatusId: e.target.value })
            }} />Average
            <input type="radio" name="userStatus" value="3" id="" onChange={(e) => {
              setUserData({ ...userData, userStatusId: e.target.value })
            }} /> Money Master
            <button className="btn" onClick={() => {
              setLoggedIn(true)
              navigate('home')
            }}>
              Log in new user
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='Quiz'>
      <h1>Quiz</h1>
      <div className='main-quiz'>
        <div className='quiz-question'>
          {renderPage()}
        </div>
        <div className='moneybot'>
          <img src="character.svg" alt="chatbot" className='moneybot-logo' />
        </div>
      </div>
      <div>
        <MobileStepper
          variant="dots"
          steps={9}
          position="static"
          activeStep={activeStep}
          sx={{ maxWidth: 400, flexGrow: 1 }}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === 8}>
              Next
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              Back
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default Quiz;
