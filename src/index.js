import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashborad';
import Landing from './pages/Landing/Landing';
import Aside from './components/Aside/Aside';
import NavbarP from './components/Navbar/Navbar';
import InfoF from './components/InfoF/InfoF';
import Footer from './components/Footer/Footer';
import 'bulma/css/bulma.min.css'

ReactDOM.render(

  <Provider store = {store}>
  <React.StrictMode>
<App/>
 
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
