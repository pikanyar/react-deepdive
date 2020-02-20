import React from "react";

export const Card = props => {
  const link = `https://en.wikipedia.org/wiki/${props.text}`;
  return (
    <div className="card" style={{ backgroundColor: props.color }}>
      <h1>{props.text}</h1>
      <p />
      <a href={link}>Article</a>
    </div>
  );
};
