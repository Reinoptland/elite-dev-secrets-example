import React from "react";
import styles from "./Columns.module.css";

export default function Columns({
  children,
  justifyContent = "flex-start",
  alignItems = "stretch",
  className = "",
}) {
  return (
    <div
      className={`${className} ${styles.columns}`}
      style={{ justifyContent, alignItems }}
    >
      {children}
    </div>
  );
}
