//import logo from './logo.svg';
import axios from 'axios';
import './Home.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {useState, useEffect, useRef} from "react";
import {BrowserRouter as Router, Route, Link, useNavigate} from "react-router-dom";

import SignIn from "./SignIn.js";

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


function Home() {
  
  const[isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const menuClick = () => {
    setIsClicked(!isClicked);
    /*alert(isClicked);*/
  }

  const closeMenu = (e) => {
    // Check if the click happened outside the dropdown menu
    const dropdownMenu = document.querySelector(".dropDownMenu");
    const icon = document.querySelector(".icon");
    if (dropdownMenu && !dropdownMenu.contains(e.target)
      && icon && !icon.contains(e.target)
    ) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", closeMenu);
    return () => {
      document.body.removeEventListener("click", closeMenu);
    };
  }, []);

  const redirectToSignIn = () => {
    navigate("/signIn");
  };

  return (

      <div className = "wrapper">
        <header className = "navBar">
          <div className = "logo">
            Yugioh.Market
          </div>
          <nav className = "navList">
            <div className = "icon" onClick = {menuClick}>
            <FontAwesomeIcon icon = {faBars} />
            </div>
            <div className = {`navButtons ${isClicked ? 'clicked dropDownMenu' : ''}`}>
              <button className = {`buttonStyle uploadButton ${isClicked ? 'clicked' : ''}`}>
                Upload
              </button>
              <button className = {`buttonStyle profileButton ${isClicked ? 'clicked' : ''}`}>
                Profile
              </button>
              <button className = {`buttonStyle signInButton ${isClicked ? 'clicked' : ''}`} onClick={redirectToSignIn}>
                  Sign In
              </button>
            </div>
          </nav>
        </header>
        <div className = "mainBody">
          <img className = {`backgroundImage ${isClicked ? 'backgroundBlur' : ''}`}>
          </img>
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
