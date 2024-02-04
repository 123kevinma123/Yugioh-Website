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

  const[input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
    .then((response) => response.json())
    .then((data) => {
      const cards = data && data.data ? data.data : [];

      const cardNames = cards.map((card) => {
        return card && card.name ? card.name : null;
      });

      const filteredNames = cardNames.filter((name) => {
        return name && name.toLowerCase().includes(value.toLowerCase());
      });
      console.log(filteredNames);
    });
  } 

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  }
  //probably should render profile/messages button only if ur logged in
  return (
      <div className = "wrapper">
        <NavBar isClicked = {isClicked} setIsClicked = {setIsClicked}/>
        <div className = "mainBody">
          <img className = {`backgroundImage ${isClicked ? 'backgroundBlur' : ''}`} alt = "background image" />
          <div className = {`searchBox ${isClicked ? 'backgroundBlur' : ''}`}>
            <input placeholder = "Type to Search..." 
              className = "searchContent" 
              value = {input} 
              onChange = {(e) => handleChange(e.target.value)} 
            />
            <div className = "searchIcon">
              <FontAwesomeIcon icon = {faSearch} />
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
