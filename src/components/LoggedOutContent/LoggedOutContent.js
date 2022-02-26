import React from "react";

export default function LoggedOutContent({ user, children }) {
  return <>{user === null && children}</>;
}
