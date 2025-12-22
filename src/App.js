import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="nav-main">
          <div>
            <img className="nav-image-profile" alt="DevMizeKR" src="images/profile.jpg" />
            <div className="nav-text">Main</div>
            <div className="nav-text">Blog</div>
          </div>
          <div>
            <img className="nav-image-profile" alt="DevMizeKR" src="images/profile.jpg" />
            <div className="nav-text">Main</div>
            <div className="nav-text">Blog</div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
