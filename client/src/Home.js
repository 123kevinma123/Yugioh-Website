//import logo from './logo.svg';
import axios from 'axios';
import './Home.css';
import "./Search.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {useState, useEffect, useRef} from "react";
import {BrowserRouter as Router, Route, Link, useNavigate} from "react-router-dom";

import SignIn from "./SignIn.js";
import NavBar from './NavBar.js';
import Search from "./Search.js";
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


const Home = ({setSearchResult}) => {
  
  const[isClicked, setIsClicked] = useState(false);

  //probably should render profile/messages button only if ur logged in
  return (
      <div className = "wrapper">
        <NavBar isClicked = {isClicked} setIsClicked = {setIsClicked}/>
        <div className = "mainBody">
          <img className = {`backgroundImage ${isClicked ? 'backgroundBlur' : ''}`} alt = "background image" />
          <Search isClicked = {isClicked} setSearchResult = {setSearchResult} position = "middle"/>
        </div>
      </div>
  );
}

export default Home;
