import React from "react";
import "./styles.css";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Justin</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Home />
      <About />
    </div>
  );
}

/*
//State and Functional
// Statefu1; and Stateless
//Each of the above components comes with props, but there are a few ways tot tell
Them apart.
Stateful: 
= Uses a component library, or useState
= Uses the render method
= Contains a constructor
Stateless
- ONLY Renders props
- Does not have its own concept of state

*/
