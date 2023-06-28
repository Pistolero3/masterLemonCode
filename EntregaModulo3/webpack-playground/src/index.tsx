import React from "react";
import { createRoot } from "react-dom/client";
import { HelloName } from "./components/helloName/HelloName";
import { Logo } from "./components/logo/Logo";
import { HolaReact } from "./components/holaReact/HolaReact";
import classes from "./mystyles.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <div className={classes.container}>
      <HolaReact text="Hola desde React" upperCase={true} />
      <Logo />
      <HelloName />
    </div>
  </>
);
