import React from "react";
import styles from "./Paragraph.module.css";

export default function Paragraph({ children }) {
  return <p className={styles.p}>{children}</p>;
}
