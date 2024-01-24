//import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";


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

const menuClick = () => {
  alert("Menu Clicked!");
}

function App() {
  
  const[isClicked, setIsClicked] = useState(false);

  const menuClick = () => {
    setIsClicked(!isClicked);
    /*alert(isClicked);*/
  }

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
          {console.log(isClicked + "hello world")}
          <div className = "navButtons">
            <button className = {`buttonStyle uploadButton ${isClicked ? 'clicked' : ''}`}>
              Upload
            </button>
            <button className = {`buttonStyle profileButton ${isClicked ? 'clicked' : ''}`}>
              Profile
            </button>
            <button className = {`buttonStyle signInButton ${isClicked ? 'clicked' : ''}`}>
              Sign In
            </button>
          </div>
        </nav>
      </header>
      <div className = "mainBody">
        <img className = "backgroundImage">
        </img>
        {/*<div className = "searchBox">
          <div className = "searchContent">
            Search
          </div>
  </div>*/}
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

export default App;
