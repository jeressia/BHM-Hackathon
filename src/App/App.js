import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Quiz from '../Quiz/Quiz';
import { useNavigate } from 'react-router-dom';

import './App.css';
function App() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [quizTaken, setQuizTaken] = useState(false);

  const [userData, setUserData] = useState({ userStatus: 'Noob' })


  return (
    <>
      {
        (!loggedIn && !quizTaken) && (
          <>
            <Quiz setQuizTaken={setQuizTaken} setLoggedIn={setLoggedIn} userData={userData} setUserData={setUserData} />
          </>
        )}
      {
        (!loggedIn && quizTaken) && (<button className="btn" onClick={() => {
          setLoggedIn(true)
          navigate('home')
        }}>
          Log in Returning User
        </button>
        )}

      <Routes>
        <Route path="/quiz" element={<Quiz setQuizTaken={setQuizTaken} setLoggedIn={setLoggedIn} userData={userData} setUserData={setUserData} />} />
        <Route path="/home" element={<Home setQuizTaken={setQuizTaken} setLoggedIn={setLoggedIn} userData={userData} />} />
      </Routes>
    </>
  );
}

export default App;