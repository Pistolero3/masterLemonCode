import React from "react";

interface Props {
  text: string;
  upperCase: boolean;
}

export const HolaReact = ({ text, upperCase }: Props): React.FC => {
  const modeCase = () => {
    text = upperCase ? text.toUpperCase() : text;
    return `${text} en ${process.env.ENV_NAME}`;
  };

  return <div>{modeCase()}</div>;
};
