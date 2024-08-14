import { Link } from "react-router-dom";
import "./chatList.css";

const ChatList = () => {
    return (
        <div className="chatList">
            <span className="title">DASHBOARD</span> 
            <Link to={"/dashboard"}>Create a new Chat</Link>
            <Link to={"/"}>Exoplore</Link>
            <Link to={"/"}>Contact</Link>
            <hr />
            <span className="title">RECENT CHATS</span> 
            <div className="list">
                <Link to={"/"}>Chat Title </Link>
                <Link to={"/"}>Chat Title </Link>
                <Link to={"/"}>Chat Title </Link>
                
               
            </div>
            <hr />
            <div className="details">
                <img src="/logo.png" alt="" />
                <div className="text">
                    <span>STARTER AI</span>
                    <span>Created by Partha</span>
                </div>
            </div>
        </div>
    );
};

export default ChatList;
