import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Containers/App';
import store from "./store/"
// import fancyLog from "./utilities/"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const render = () => {
  // fancyLog(store.getState());
  root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);}
render()
store.subscribe(render)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
