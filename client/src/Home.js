//import logo from './logo.svg';
import axios from 'axios';
import './Home.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {useState, useEffect, useRef} from "react";
import {BrowserRouter as Router, Route, Link, useNavigate} from "react-router-dom";

import SignIn from "./SignIn.js";
import NavBar from './NavBar.js';

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


const Home = () => {
  
  const[isClicked, setIsClicked] = useState(false);

  //probably should render profile/messages button only if ur logged in
  return (
      <div className = "wrapper">
        <NavBar isClicked = {isClicked} setIsClicked = {setIsClicked}/>
        <div className = "mainBody">
          <img className = {`backgroundImage ${isClicked ? 'backgroundBlur' : ''}`} alt = "background image" />
          <div className = {`searchBox ${isClicked ? 'backgroundBlur' : ''}`}>
            <div className = "searchContent">
              Search
            </div>
          </div>
        </div>
        {/*<footer className = "footer">
          <div className = "footerText">
            Copyright Kevin Ma 2024
          </div>
          <div className = "footerSocials">
            Socials here
          </div>
    </footer> */}
      </div>
  );
}

export default Home;
