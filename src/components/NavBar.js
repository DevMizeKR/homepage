import { useNavigate, useLocation } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./NavBar.css";

const NAV_ITEMS = [
    { path: "/main", label: "Main", refKey: "main" },
    { path: "/blog", label: "Blog", refKey: "blog" }
];

function NavBar() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const containerRef = useRef(null);
    const itemRefs = {
        main: useRef(null),
        blog: useRef(null),
    }

    const [underlineStyle, setUnderlineStyle] = useState({ width:0, left:0 });

    useLayoutEffect(() => {
        const updateUnderline = () => {
            const activeItem = NAV_ITEMS.find(item => item.path === pathname);
            if (!activeItem) return;

            const activeRef = itemRefs[activeItem.refKey].current;
            const container = containerRef.current;
            
            if (!activeRef || !container) return;

            const containerLeft = container.getBoundingClientRect().left;
            const { left, width } = activeRef.getBoundingClientRect();

            setUnderlineStyle({ left: left-containerLeft, width, });
        }

        document.fonts?.ready.then(updateUnderline);
    }, [pathname]);
    
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
                    {NAV_ITEMS.map(item => (
                        <button
                            key={item.path}
                            ref={itemRefs[item.refKey]}
                            className="nav-text"
                            onClick={() => navigate(item.path)}>
                            {item.label}
                        </button>
                    ))}
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