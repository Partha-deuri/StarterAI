import { Link } from "react-router-dom";
import "./homepage.css";

const Homepage = () => {
    return (
        <div className="homepage">
            <img src="/orbital.png" className="orbital" alt="" />
            <div className="left">
                <h1>STARTER AI</h1>
                <h2>Make things easy for you</h2>
                <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    ipsa, esse earum iusto facilis cumque corporis sit
                    repellendus incidunt unde!
                </h3>
                <Link to={"/dashboard"}>Get Started</Link>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <div className="bgContainer">
                        <div className="bg"></div>
                    </div>
                    <img src="/bot.png" className="bot" />
                </div>
            </div>
        </div>
    );
};

export default Homepage;
