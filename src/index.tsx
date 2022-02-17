import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
    {id: 1, name: 'Anton'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Lena'},
    {id: 4, name: 'Stas'}
]

let messageData = [
    {id: 1, text: 'Hello'},
    {id: 2, text: 'Hello'},
    {id: 3, text: 'Hello'},
    {id: 4, text: 'Hello'},
]

ReactDOM.render(
  <React.StrictMode>
    <App messageData={messageData} dialogsData={dialogsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
