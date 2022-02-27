import React from "react";
import styles from "./Card.module.css";

export default function Card({
  children,
  as: Component = "div",
  className = "",
  variant = "white",
}) {
  return (
    <Component className={`${className} ${styles.card} ${styles[variant]}`}>
      {children}
    </Component>
  );
}
