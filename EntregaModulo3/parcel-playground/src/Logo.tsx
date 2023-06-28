import React from "react";
import { useState } from "react";
import "./mystyles.scss";
import zelda from "./content/zelda.png";
import zelda2 from "./content/zelda2.png";

const Logo = () => {
  const [image, setImage] = useState(zelda);

  const clickHandler = () => {
    image === zelda ? setImage(zelda2) : setImage(zelda);
  };
  return (
    <div className="imageContainer">
      <img src={image} id="logo" alt="logo"></img>
      <button onClick={clickHandler}>Click me!</button>
    </div>
  );
};

export default Logo;
