import React from "react";
import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Title from "./Title";

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Some Simple Title" />
      </main>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is changed
        </a>
      </header>
    </div>
  );
}

export default App;
export default class Title extends Component {
  render() {
    return <h1>{this.props.content}</h1>;
  }
}
