import React from "react";

interface Props {
  titles: string[];
}

export const TableHeader: React.FC<Props> = (props) => {
  return (
    <>
      {props.titles.map((title) => (
        <span className="list-header" key={title}>
          {title}
        </span>
      ))}
    </>
  );
};
