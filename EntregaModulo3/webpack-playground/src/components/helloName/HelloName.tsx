import React from "react";
import classes from "./helloNameStyle.scss";

console.log(process.env.API_BASE);

export const HelloName = () => {
  const [name, setName] = React.useState("World");

  const changeName = () => {
    const inputName = (document.getElementById("name") as HTMLInputElement)
      .value;
    setName(inputName);
  };

  return (
    <div className={classes.container}>
      <input onInput={changeName} placeholder="Insert Name" id="name"></input>
      <span className={classes.nameBox}>Hola {name}</span>
    </div>
  );
};
