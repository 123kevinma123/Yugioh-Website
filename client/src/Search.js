import axios from 'axios';
import './Home.css';
import "./Search.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {useState, useEffect, useRef} from "react";

const Search = ({isClicked}) => {

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
    return (
        <>
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
            <div className = "searchResultsList">
                {
                    input.trim() !== "" &&
                    results.slice(0,5).map((result, id) => {
                        return <div className = "searchResults" key = {id} onClick = {(e) => alert(`you clicked on ${result}`)}>
                            {result}
                        </div>

                    })
                }
            </div>
        </>
    );
}
export default Search;