import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './component/Hello';

const root = ReactDOM.createRoot(document.getElementById('root'));
const myElement01 = (<>
  <h1>I know JSX!</h1><h1>I know JSX!</h1></>);

const myElement05 = <div>Hello!! five + five = {5 + 5}</div>
const myElement03 = React.createElement('h1', {}, 'I do not use JSX!');

const myElement07 = <input style = {{padding:'50px', margin:"50px"}} type = "date"/>

// class tempn{
//   number : 101;
// }
root.render(
  // <Hello name = {"hahahaa"} obj = {tempn}/>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
