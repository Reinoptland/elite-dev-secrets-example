import React from "react";

export default function Heading({ children, size = "h1" }) {
  const TagName = `${size}`;
  return <TagName>{children}</TagName>;
}
