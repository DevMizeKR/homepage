import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const containerRef = useRef(null);
    const mainRef = useRef(null);
    const blogRef = useRef(null);

    const [underlineStyle, setUnderlineStyle] = useState({ width:0, left:0 });

    useEffect(() => {
        let activeRef = null;

        if (location.pathname === "/main") { activeRef = mainRef; }
        else if (location.pathname === "/blog") { activeRef = blogRef; }


        if (activeRef?.current && containerRef.current) {
            const containerLeft = containerRef.current.getBoundingClientRect().left;
            const { left, width } = activeRef.current.getBoundingClientRect();
            setUnderlineStyle({left: left - containerLeft, width,});
        }
    }, [location.pathname]);
    
    return (
        <nav className="nav-main">
            <div className="nav-left">
                <img
                    className="nav-image-profile"
                    alt="DevMizeKR"
                    src="images/profile.jpg"
                    onClick={() => navigate("/")}
                />
                <div className="nav-link" ref={containerRef}>
                    <button
                        ref={mainRef}
                        className="nav-text"
                        onClick={() => navigate("/main")}>
                        Main
                    </button>
                    <button
                        ref={blogRef}
                        className="nav-text"
                        onClick={() => navigate("/blog")}>
                        Blog
                    </button>
                    <span
                        className="nav-underline"
                        style={{
                            width: underlineStyle.width,
                            transform: `translateX(${underlineStyle.left}px)`,
                        }}
                    />
                </div>
            </div>
            <div className="nav-right">
                <a href="https://www.instagram.com/hwang_c_k_/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/%EC%B0%AC%EA%B8%B0-%ED%99%A9-6a75062ba/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/DevMizeKR" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </nav>
    );
}

export default NavBar;