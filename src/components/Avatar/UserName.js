import React from "react";

export function UserName({ user: { name } }) {
  return <span>{name}</span>;
}
