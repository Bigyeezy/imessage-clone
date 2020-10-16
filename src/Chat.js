import { IconButton } from "@material-ui/core";
import { MicNone } from "@material-ui/icons";
import React, { useState } from "react";
import "./Chat.css";

function Chat() {
  const [input, setInput] = useState("");

  const sendMessage = (event) => {
    event.preventDefault();

    // Firebase magic

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">Chanel name</span>
        </h4>
        <strong>Details</strong>
      </div>

      {/* Chat Messages */}
      <div className="chat__messages">
        <h1>I am a message</h1>
        <h1>I am a message</h1>
        <h1>I am a message</h1>
        <h1>I am a message</h1>
        <h1>I am a message</h1>
        <h1>I am a message</h1>
      </div>

      {/* Chat Input */}
      <div className="chat__input">
        <form>
          <input
            placeholder="iMessage"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>

        <IconButton>
          <MicNone className="chat__mic" />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
