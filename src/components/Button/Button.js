import React from "react";
import styles from "./Button.module.css";

export default function Button({ children, fullwidth = false, ...props }) {
  return (
    <button
      className={`${styles.btn} ${fullwidth ? styles.fullwidth : ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
