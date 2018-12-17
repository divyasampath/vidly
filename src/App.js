import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";

class App extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <Movies />
        </div>
      </main>
    );
  }
}

export default App;
