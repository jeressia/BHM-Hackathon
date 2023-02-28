import React from "react";
import { useNavigate } from 'react-router-dom';

import "./style.css";

const Navbar = (props) => {
  const navigate = useNavigate();

  const { setQuizTaken, setLoggedIn } = props;

  return (

    <div className="navbar">
      <img src="moneybotlogo.svg" className="logo" id="image" alt="logo" />
      <div className="img-wrapper">
        <img src="home.svg" className="img active" id="image" height="15" alt="home" /><p className="icon-label">Home</p>
        <img src="dashboard.svg" className="img" id="image" alt="dashboard" /> <p className="icon-label">Dashboard</p>
        <img src="medal.svg" className="img medal" id="image" height="15" alt="medal" /> <p className="icon-label">Awards</p>
        <img src="profile.svg" className="img" id="image" alt="profile" /> <p className="icon-label">Profile</p>
        <img src="settings.svg" className="img" id="image" alt="settings" /> <p className="icon-label">Settings</p>
        <button className="btn" onClick={() => {
          setLoggedIn(false)
          setQuizTaken(true)
          navigate(-1)
        }}>
          Log out
        </button>
      </div>
      <p className="nav-footer">MoneyBot&trade; 2023 </p>
    </div>
  );

};

export default Navbar