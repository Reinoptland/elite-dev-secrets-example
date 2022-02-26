import React from "react";

export default function LoggedInContent({ user, children }) {
  return <>{user && children}</>;
}
