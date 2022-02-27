import React from "react";
import styles from "./Input.module.css";

export function Input({ ...props }) {
  return <input {...props} className={styles.input} />;
}
