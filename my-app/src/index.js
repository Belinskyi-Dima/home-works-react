import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
// import Button from "./components/Button/Button.jsx";
// import Card from "./components/Card.jsx"
// import list from "./components/list.json"
// import  "./components/list.json"


// import "./components/Button/Button.scss"
// import Portal from './components/Portal'

ReactDOM.render(
  <React.StrictMode>

	<App /> 
	{/* <Card/> */}
	{/* <Portal /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 