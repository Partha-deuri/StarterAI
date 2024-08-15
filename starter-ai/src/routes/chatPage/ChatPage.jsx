import { useEffect, useRef } from "react";
import "./chatPage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";

const ChatPage = () => {
    const endRef = useRef(null);
    useEffect(() => {
        endRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);
    return (
        <div className="chatPage">
            <div className="wrapper">
                <div className="chat">
                    <div className="message">Test message</div>
                    <div className="message user">Test message</div>
                    <div className="message">Test message</div>
                    <div className="message user">Test message</div>
                    <div className="message">Test message</div>
                    <div className="message user">Test message</div>
                    <div className="message">Test message</div>
                    <div className="message user">Test message</div>
                    <div className="message">Test message</div>
                    <div className="message user">Test message</div>
                    <div className="message">Test message</div>
                    <div className="message user">Test message</div>
                    <div className="message">Test message</div>
                    <div className="message user">Test message</div>
                    <div className="message">Test message</div>
                    <div className="message user">Test message</div>
                    <div className="message">Test message</div>
                    <div className="message user">Test message</div>
                    <div className="message">Test message</div>
                    <div className="message user">Test message</div>
                    <div className="message">Test message</div>
                    <div className="message user">Test message</div>
                    <div className="message">Test message</div>
                    <div className="message user">Test message</div>
                    <div className="message">Test message</div>
                    <div className="message user">Test message</div>
                    <div className="message">Test message</div>
                    <div className="message user">Test message</div>
                    <div className="message">Test message</div>
                    <div className="message user">Test message</div>
                    <div className="message">Test message</div>
                    <div className="message user">Test message</div>
                    <div className="message">Test message</div>
                    <div className="message user">Test message</div>
                    <div className="message">Test message</div>
                    <div className="message user">Test message</div>
                    <div ref={endRef} className="endRef" ></div>
                </div>
                <NewPrompt />
            </div>
        </div>
    );
};

export default ChatPage;
