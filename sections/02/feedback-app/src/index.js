import React from 'react';
import  ReactDOM  from 'react-dom/client';
// import ReactDOM from 'react-dom'; No longer supported
import App from './App';
import "./index.css"

// ReactDom.render is no longer supported in React 18

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.createRoot replaces ReactDOM.render in React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);