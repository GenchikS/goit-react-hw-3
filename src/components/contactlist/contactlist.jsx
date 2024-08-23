import Contact from "./contact";
import css from "./contactlist.module.css";

export default function ContactList({ value, contactArr, onHandleDelete }) {
  return (
    <ul className={css.containerContact}>
      {contactArr.map(
        (contact) =>
          contact.name.toLowerCase().includes(value) && (
            <li className={css.listContactUser} key={contact.id}>
              {/* {console.log("contact.id", contact.id)} */}
              <Contact
                name={contact.name}
                number={contact.number}
                id={contact.id}
                onHandleDelete={onHandleDelete}
              />
            </li>
          )
      )}
      {/* {console.log("contactArr", contactArr)} */}
    </ul>
  );
}
