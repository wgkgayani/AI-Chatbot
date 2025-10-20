import React from "react";
import ChatbotIcon from "./components/ChatbotIcon";

const App = () => {
  return (
    <div className="container">
      <div className="chatbot-popup">
        {/*chatbot header*/}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button className="material-symbols-rounded">
            keyboard_arrow_down
          </button>
        </div>
        {/*chatbot body*/}
        <div className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there <br /> How can I help you today?
            </p>
          </div>

          <div className="message user-message">
            <p className="massage-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="chat-footer">
          <form action="#" className="chat-form">
            <input
              type="text"
              placeholder="Message..."
              className="Message-input"
              required
            />
            <button className="material-symbols-rounded">arrow_upward</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
