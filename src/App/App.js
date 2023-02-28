import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Quiz from '../App/Quiz/Quiz';
import { useNavigate } from 'react-router-dom';

import './App.css';
function App() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [quizTaken, setQuizTaken] = useState(false);

  const [userData, setUserData] = useState({ userImgUrl: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-03/220317-Cynthia-Talla-ew-321p-4bc199.jpg', userStatus: 'Noob' })


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