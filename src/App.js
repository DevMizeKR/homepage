import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import NavBar from "./components/NavBar";
import './App.css';

function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <header>
        {!isHome && <NavBar />}
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
      <footer>
        {!isHome && 
          <div className="copyright">© 2026 Mize. All rights reserved.</div>
        }
      </footer>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
