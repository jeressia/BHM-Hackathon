import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Quiz from '../Quiz/Quiz';
import { useNavigate } from 'react-router-dom';

import './App.css';



function App() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false)
  console.log("loggedIn", loggedIn)
  return (
    <>
      {
        !loggedIn && (
          <button className="btn" onClick={() => {
            setLoggedIn(true)
            navigate('home')
          }}>
            Log in
          </button>
        )
      }
      <Routes>
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
