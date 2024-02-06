import {useState, useEffect, useRef} from "react";
import "./Home.css";
import "./Results.css";
import "./Search.css";
import NavBar from './NavBar.js';
import Search from "./Search.js";
const Results = ({searchResult, setSearchResult}) => {
    const[isClicked, setIsClicked] = useState(false);
    return(
      <div className = "wrapper">
        <NavBar isClicked = {isClicked} setIsClicked = {setIsClicked}/>
        <div className = "mainBody">
          <img className = {`backgroundImage ${isClicked ? 'backgroundBlur' : ''}`} alt = "background image" />
          <Search isClicked = {isClicked} setSearchResult = {setSearchResult}/>
        </div>
        <div className = "resultsBody">
          <div className = "temp">
            You searched for {searchResult}
          </div>
        </div>
      </div>
    );
}//might need to make a new search based on this thing that autofills it
export default Results;