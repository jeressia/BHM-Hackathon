import React from 'react';
// import ReactDOM from 'react-dom/client';
import { Router } from 'react-router-dom'
import './index.css';
import App from './App/App'
import { createBrowserHistory } from "history";
import { createRoot } from 'react-dom/client';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const customHistory = createBrowserHistory();

const root = createRoot(document.getElementById("root"))

root.render(
  < Router history={customHistory} >
    <App />
  </Router >
);
