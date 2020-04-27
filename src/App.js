import React, { useRef } from "react";
import { findDOMNode } from "react-dom";
import $ from "jquery";
import logo from "./logo.svg";
import "./App.css";
import AnimateTxt from "./components/animateTxt";

function App() {
  const toggleLogo = useRef(null);

  const toggle = () => {
    $(findDOMNode(toggleLogo.current)).slideToggle();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img ref={toggleLogo} src={logo} className="App-logo" alt="logo" />
        <AnimateTxt>HERE IS JQUERY</AnimateTxt>
        <button onClick={toggle}>Toggle</button>
      </header>
    </div>
  );
}

export default App;
