import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <img
                className="home-image-profile"
                alt="DevMizeKR"
                src="images/profile.jpg"
                onClick={() => navigate("/profile")}
            />
        </div>
    );
}

export default Home;