import React, { Component } from "react";
import { Card } from "../Comps/Cards";

export class About extends Component {
  constructor() {
    super();
    this.state = {
      people: [{ name: "Justin", city:"Boston" },{name: "Pinar", city: "Cambridge"}, "Naima"]
    };
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        {this.state.people.map((p, index) => (
          <Card

        ))}
      </div>
    );
  }
}

/*
Itteratte through each person in people. 
If the person has a city, show it.If they do not, show Boston
*/