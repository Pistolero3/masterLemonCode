import React from "react";
import classes from "./Logo.scss";
import zelda from "../../content/zelda.png";

export const Logo = () => {
  return (
    <div className={classes.imageContainer}>
      <img src={zelda} alt="logo"></img>
    </div>
  );
};
