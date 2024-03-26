//import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {useState, useEffect, useRef} from "react";
import {BrowserRouter as Router, Route, Routes, Link, useNavigate} from "react-router-dom";

import Home from "./Home.js";
import SignIn from "./SignIn.js";
import Profile from "./Profile.js";
import Messages from "./Messages.js";
import SignUp from "./SignUp.js";
import Results from "./Results.js";

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
//hello


function App() {
  const[searchResult, setSearchResult] = useState("");
  return (
    <div className = "App">
      <Routes>
        <Route path = "/" element = {<Home setSearchResult = {setSearchResult}/>} />
        <Route path = "/signIn" element = {<SignIn/>} />
        <Route path = "/signUp" element = {<SignUp/>} />
        <Route path = "/profile" element = {<Profile/>} />
        <Route path = "/messages" element = {<Messages/>} />
        <Route path = {`/results/${searchResult}`} element = {<Results searchResult = {searchResult} setSearchResult = {setSearchResult}/>} />
      </Routes>
    </div>
  );
}

export default App;
