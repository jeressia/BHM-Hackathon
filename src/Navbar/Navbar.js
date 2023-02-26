import React from "react";
import "./style.css";

const Navbar = () => {
  return (

    <div className="wrapper">
      <img src="moneybotlogo.svg" className="logo" id="image" />
      <div className="img-wrapper">
        <img src="home.svg" className="img active" id="image" height="15" /><p className="icon-label">Home</p>
        <img src="dashboard.svg" className="img" id="image" /> <p className="icon-label">Dashboard</p>
        <img src="medal.svg" className="img medal" id="image" height="15" /> <p className="icon-label">Awards</p>
        <img src="profile.svg" className="img" id="image" /> <p className="icon-label">Profile</p>
        <img src="settings.svg" className="img" id="image" /> <p className="icon-label">Settings</p>
      </div>
      <p>MoneyBot 2023</p>
    </div>
  );

};

export default Navbar