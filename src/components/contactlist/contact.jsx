import css from "./contactlist.module.css"

export default function Contact({ name, number, id, onHandleDelete }) {
  // console.log("name", name);  //  перевірка компонентів яки приходять
  // console.log("numbere", number);
  return (
    <div className={css.containerListText}>
      <ul>
        <li>
          <p className={css.textName}>{name}</p>
        </li>
        <li>
          <p className={css.textNumber}>{number}</p>
        </li>
      </ul>
      <button onClick={() => onHandleDelete(id)} className={css.buttomDelete}>
        Delete
      </button>
    </div>
  );
}



