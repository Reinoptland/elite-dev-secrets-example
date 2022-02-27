import styles from "./Select.module.css";

export function Select({ children, ...props }) {
  return (
    <select {...props} className={styles.select}>
      {children}
    </select>
  );
}
