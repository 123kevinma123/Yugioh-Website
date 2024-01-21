//import logo from './logo.svg';
import axios from 'axios';
import './App.css';


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

//background could be some 
function App() {
  
  return (
    <div className = "wrapper">
      <header className = "navBar">
        <div className = "logo">
          Logo
        </div>
        <nav className = "navButtons">
          <button className = "uploadButton">
            Uploadd
          </button>
          <button className = "profileButton">
            Profile
          </button>
        </nav>
      </header>
      <div className = "mainBody">
        <div className = "search">
          Search
        </div>
      </div>
      <footer className = "footer">
        Footer
      </footer>
    </div>
  );
}

export default App;
