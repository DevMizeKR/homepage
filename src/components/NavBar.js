import { useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="nav-main">
            <div>
                <img className="nav-image-profile" alt="DevMizeKR" src="images/profile.jpg" />
            </div>
            <div>
                <img className="nav-image-profile" alt="DevMizeKR" src="images/profile.jpg" />
            </div>
        </nav>
    );
}

export default NavBar;