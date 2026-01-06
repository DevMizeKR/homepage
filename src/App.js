import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Blog from "./pages/Blog";
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
        <Route path="/blog" element={<Blog />} />
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
