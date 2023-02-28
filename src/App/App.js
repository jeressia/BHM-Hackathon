import './App.css';
import { Routes, Route, Router } from "react-router-dom"
// import { Checklist } from './Challenges/Checklist';
// import { CreditGrowth } from "./Challenges/CreditGrowth";
// import { DebtFree } from "./Challenges/DebtFree"
// import { Investments } from "./Challenges/Investments";
// import { Savings } from "./Challenges/Savings"
import { useState } from 'react';
import Home from '../pages/Home';
import Quiz from '../Quiz/Quiz';
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

      {/* <Checklist /> */}

      <Routes>
        <Route path="/quiz" element={<Quiz setQuizTaken={setQuizTaken} setLoggedIn={setLoggedIn} userData={userData} setUserData={setUserData} />} />
        <Route path="/home" element={<Home setQuizTaken={setQuizTaken} setLoggedIn={setLoggedIn} userData={userData} />} />
        {/* <Route path="/challenge/credit_growth" element={<CreditGrowth />} /> */}
        {/* <Route path="/challenge/debt_free" element={<DebtFree />} /> */}
        {/* <Route path="/challenge/investments" element={<Investments />} /> */}
        {/* <Route path="/challenge/savings" element={<Savings />} /> */}
      </Routes>
    </>
  );
}

export default App;