import axios from 'axios';
import './Home.css';
import "./Search.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {useState, useEffect, useRef} from "react";
import {BrowserRouter as Router, Route, Link, useNavigate} from "react-router-dom";

const Search = ({isClicked, setSearchResult, position}) => {

  const navigate = useNavigate();
  const [results, setResults] = useState([]);
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
      setResults(filteredNames);
      console.log(filteredNames)
    });
  } 

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  }
  const redirectToResults = (result) => {
    setSearchResult(result);
    navigate(`/results/${result}`);
  }
    return (
        <>
            <div className = {`searchBox ${isClicked ? 'backgroundBlur' : ''}`} 
            style={{
              alignSelf: position === 'middle' ? 'center' : 'baseline', 
              marginTop: position === 'middle' ? '-5em' : '5em'
            }}>
                <input placeholder = "Type to Search..." 
                    className = "searchContent" 
                    value = {input} 
                    onChange = {(e) => handleChange(e.target.value)} 
                />
                <div className = "searchIcon">
                    <FontAwesomeIcon icon = {faSearch} />
                </div>
            </div>
            <div className = {`searchResultsList ${isClicked ? 'backgroundBlur' : ''}`}
            style={{
              marginTop: position === 'middle' ? '445px' : "140px"
            }}>
                {
                    input.trim() !== "" &&
                    results.slice(0,5).map((result, id) => {
                        return <div className = "searchResults" key = {id} onClick = {(e) => redirectToResults(result)}>
                            {result}
                        </div>

                    })
                }
            </div>
        </>
    );
}
export default Search;