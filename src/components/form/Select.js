import styles from "./Select.module.css";
function Select({ text, name, option, handleOnChange, value }) {
  return (
    <div className={styles.select_control}>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name}>
        <option>{text}</option>
      </select>
    </div>
  );
}

export default Select;
