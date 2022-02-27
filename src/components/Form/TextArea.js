import styles from "./TextArea.module.css";

export function TextArea({ ...props }) {
  return <textarea {...props} className={styles.textArea} />;
}
