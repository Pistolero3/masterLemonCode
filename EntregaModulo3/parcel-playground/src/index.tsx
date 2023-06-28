import React from "react";
import { createRoot } from "react-dom/client";
import HelloComponent from "./HelloComponent";
import Logo from "./Logo";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <div>
      <HelloComponent />
    </div>
    <div>
      <Logo />
    </div>
  </>
);
