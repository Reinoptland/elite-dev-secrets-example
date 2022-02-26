import React from "react";
import styles from "./Columns.module.css";

export default function Columns({
  children,
  justifyContent = "flex-start",
  className = "",
}) {
  return (
    <div
      className={`${className} ${styles.columns}`}
      style={{ justifyContent }}
    >
      {children}
    </div>
  );
}
