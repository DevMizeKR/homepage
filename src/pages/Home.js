import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <img
                className="home-image-profile"
                alt="DevMizeKR"
                src="media/profile.jpg"
                onClick={() => navigate("/main")}
            />
        </div>
    );
}

export default Home;