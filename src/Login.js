import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macos/macos-sierra-messages-icon.png"
          alt="iMessage Logo"
        />
        <h1>iMessage</h1>
      </div>

      <button className="login__submit">Sign In</button>
    </div>
  );
}

export default Login;
