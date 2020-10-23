import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import IMessage from "./IMessage";
import { selectUser } from "./features/userSlice";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);

  return <div className="app">{user ? <IMessage /> : <Login />}</div>;
}

export default App;
