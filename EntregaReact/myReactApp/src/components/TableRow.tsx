import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import type { MemberEntity } from "../model";

interface Props {
  item: MemberEntity;
}

export const TableRow: React.FC<Props> = (props) => {
  return props.item.login ? (
    <Fragment key={props.item.id}>
      <img src={props.item.avatar_url} />
      <span>{props.item.id}</span>
      <Link to={`/detail/member/${props.item.login}`}>{props.item.login}</Link>
    </Fragment>
  ) : (
    <Fragment key={props.item.name}>
      <img src={props.item.image} alt={props.item.name} />
      <span>{props.item.species}</span>
      <Link to={`/detail/rick/${props.item.name}`}>{props.item.name}</Link>
      <span>{props.item.location.name}</span>
      <span>{props.item.status}</span>
    </Fragment>
  );
};
