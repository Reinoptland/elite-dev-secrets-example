import styles from "./CheckBox.module.css";
import { Label } from "./Label";

export function CheckBox({ children, ...props }) {
  return (
    <Label className={styles.label}>
      <input {...props} className={styles.checkbox} type="checkbox" />
      {children}
    </Label>
  );
}
