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

    const redirectToSignIn = () => {
        navigate("/signIn");
    }

    //edit css tmrw

    return (
        <div className = "wrapper">
          <NavBar isClicked = {isClicked} setIsClicked = {setIsClicked}/>
          <div className = "mainBody">
            <img className = {`backgroundImage ${isClicked ? 'backgroundBlur' : ''}`} alt = "background image" />            
            <div className = {`signUpMain ${isClicked ? 'backgroundBlur' : ''}`}>
              <div className = "signUpInLogo" >
                Sign Up
              </div>
              <div className = "userName">
                Username
              </div>
              <div className = "password">
                Password
              </div>
              <div className = "confirmPassword">
                Confirm Password
              </div>
              <button className = "logInButton">
                Register
              </button>
              <div className = "noAccount">
                No Account?
                <button className = "signUpInButton" onClick = {redirectToSignIn}>
                    Sign In
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