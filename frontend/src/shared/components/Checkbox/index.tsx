import styles from "./index.module.css";

const Checkbox = ({
  children,
  value,
  checked,
  onChange,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  disabled,
  ...props
}: JSX.IntrinsicElements["input"]) => (
  <label className={styles.checkboxLabel}>
    <input
      type="checkbox"
      checked={checked}
      value={value}
      onChange={onChange}
      {...props}
      className={styles.checkboxInput}
    />
    {children}
  </label>
);

export default Checkbox;