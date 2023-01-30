import styles from "./Select.module.css";
function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.select_control}>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name}>
        <option>Selecione uma opção</option>
        {options.map((options) => (
          <option value={options.id} key={options.id}>
            {options.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
