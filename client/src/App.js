//import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {useState, useEffect, useRef} from "react";
import {BrowserRouter as Router, Route, Routes, Link, useNavigate} from "react-router-dom";

import Home from "./Home.js";
import SignIn from "./SignIn.js"

const apiCall = () => {
  axios.get('http://localhost:9000/').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
}
//<button onClick={apiCall}>Make API Call</button>

//text color:
//#abb2bf

//highlight color:
//#e0e0e0

//probably replace "sign in" with "profile" after you sign in 


function App() {
  const navigate = useNavigate();
  return (
    <div className = "App">
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/SignIn" element = {<SignIn/>} />
      </Routes>
    </div>
  );
}

export default App;
