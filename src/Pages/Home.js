import React, { Component } from "react";
import { Card } from "../Comps/Cards";

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      animals: [{ name: "Dog", color: "red" }, "Cats", "Bear", "Koala"]
    };
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        {this.state.animals.map(a => (
          <Card
            text={a.name ? a.name : a}
            color={a.color ? a.color : "yellow"}
          />
        ))}
      </div>
    );
  }
}
