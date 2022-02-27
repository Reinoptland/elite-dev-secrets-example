import styles from "./Form.module.css";

export default function Form({ children, className = "", ...props }) {
  return (
    <form {...props} className={`${styles.form} ${className}`}>
      {children}
    </form>
  );
}
