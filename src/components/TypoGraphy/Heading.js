import React from "react";

export default function Heading({ children, type = "h1" }) {
  const TagName = `${type}`;
  return <TagName>{children}</TagName>;
}
