import React from "react";
import styles from "./Card.module.css";

export default function Card({ children, as: Component, className }) {
  return (
    <Component className={`${className} ${styles.card}`}>{children}</Component>
  );
}

Card.defaultProps = {
  as: "div",
};
