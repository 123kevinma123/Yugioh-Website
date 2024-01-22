//import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


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
function App() {
  
  return (
    <div className = "wrapper">
      <header className = "navBar">
        <div className = "logo">
          Yugioh.Market
        </div>
        <nav className = "navList">
          <div className = "icon">
          <FontAwesomeIcon icon={faBars} />
          </div>
          <div className = "navButtons">
            <button className = "buttonStyle signInButton">
              Sign In
            </button>
            {/*<button className = "buttonStyle uploadButton">
              Upload
              </button> */}
            <button className = "buttonStyle profileButton">
              Profile
            </button>
          </div>
        </nav>
      </header>
      <div className = "mainBody">
        <div className = "searchBox">
          <div className = "searchContent">
            Search
          </div>
        </div>
      </div>
      <footer className = "footer">
        Footer
      </footer>
    </div>
  );
}

export default App;
