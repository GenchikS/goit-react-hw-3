import css from "./searchbox.module.css"

export default function Searchbox({ value, onhandleChange }) {
    const handleChange = (evn) => {
      onhandleChange(evn.target.value);
    };
  return (
    <div className={css.containerSearchBox}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
              className={css.searchInput}
              onChange={handleChange}
          />
          {/* перевірочна строчка введеного значення value */}
          {/* <p>Input: {value}</p> */}
    </div>
  );
}