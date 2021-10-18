import React from "react";
import { ListItemContainer, RoundImage } from "./styled";

export const ProfileListItem = (props) => {
  return (
    <ListItemContainer>
      <RoundImage src={props.photo} />
      <h2>{props.name}</h2>
    </ListItemContainer>
  );
};
