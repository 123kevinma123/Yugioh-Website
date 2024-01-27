import axios from 'axios';
import './Home.css';
import "./SignIn.css";
import NavBar from "./NavBar.js";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {useState, useEffect, useRef} from "react";
import {BrowserRouter as Router, Route, Link, useNavigate} from "react-router-dom";

 
const SignIn = () => {
  
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
    }

    //edit css tmrw

    return (
        <div className = "wrapper">
          <NavBar isClicked = {isClicked} setIsClicked = {setIsClicked}/>
          <div className = "mainBody">
            <img className = {`backgroundImage ${isClicked ? 'backgroundBlur' : ''}`} alt = "background image" />            
            <div className = {`signInMain ${isClicked ? 'backgroundBlur' : ''}`}>
              <div className = "signInLogo" >
                Sign Up
              </div>
              <div className = "userName">
                Username
              </div>
              <div className = "password">
                Password
              </div>
              <button className = "logInButton">
                Register
              </button>
              <div className = "noAccount">
                No Account?
                <button className = "signUpButton" onClick = {redirectToSignIn}>
                    Sign Up
                </button>
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
 
export default SignIn;