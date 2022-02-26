import React from "react";
import styles from "./Avatar.module.css";
import { backgroundColorWithOpacity } from "./utils";

export default function Avatar({ user: { hexColor, name } }) {
  return (
    <div
      className={styles.avatar}
      style={{
        backgroundColor: backgroundColorWithOpacity(hexColor),
        borderColor: hexColor,
      }}
    >
      {name.charAt(0)}
    </div>
  );
}
