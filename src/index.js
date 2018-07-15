import React from "react";
import ReactDOM from "react-dom";
import MyComponent1 from "./Method1";
import MyComponent2 from "./Method2";
import MyComponent3 from "./Method3";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <MyComponent1 />
      <MyComponent2 />
      <MyComponent3 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
