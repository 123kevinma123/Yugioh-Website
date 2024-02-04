import axios from 'axios';
import './Home.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {useState, useEffect, useRef} from "react";
import {BrowserRouter as Router, Route, Link, useNavigate} from "react-router-dom";

//text color:
//#abb2bf

//highlight color:
//#e0e0e0

//probably replace "sign in" with "profile" after you sign in 


const NavBar = ({isClicked, setIsClicked}) => {
  
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

  const redirectToProfile = () => {
    navigate("/profile");
  };

  const redirectToHome = () => {
      navigate("/");
  }

  //probably should render profile/messages button only if ur logged in
  return (
      <div className = "wrapper">
        <header className = "navBar">
          <div className = "logo" onClick = {redirectToHome}>
            Yugioh.Market
          </div>
          <nav className = "navList">
            <div className = "icon" onClick = {menuClick}>
            <FontAwesomeIcon icon = {faBars} />
            </div>
            <div className = {`navButtons ${isClicked ? 'clicked dropDownMenu' : ''}`}>
              <button className = {`buttonStyle homeButton ${isClicked ? 'clicked' : ''}`} onClick = {redirectToHome}>
                Home
              </button>
              <button className = {`buttonStyle profileButton ${isClicked ? 'clicked' : ''}`} onClick = {redirectToProfile}>
                Profile
              </button>
              <button className = {`buttonStyle signInButton ${isClicked ? 'clicked' : ''}`} onClick = {redirectToSignIn}>
                  Sign In
              </button>
            </div>
          </nav>
        </header>
      </div>
  );
}

export default NavBar;