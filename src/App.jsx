import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/contactform/contactform";
import ContactList from "./components/contactlist/contactlist";
import Searchbox from "./components/searchbox/searchbox";
import contactUsersStart from "./components/contactlist/contactlist.json";

function App() {
  const [inputValue, setInputValue] = useState(""); //  стан для пошуку

  // константа contactArr отримує масив contactUsers та далі передаємо в компонент ContactList
  const [contactArr, setContactAdd] = useState(contactUsersStart);

  const userAdd = () => {
    setContactAdd(() => {
      const contactArrStorage = window.localStorage.getItem("save-contact");
      // const contactArrParse = JSON.parse(contactArrStorage);
      // if (contactArrParse.length) {
      return JSON.parse(contactArrStorage);
      // } else {
      // return contactUsersStart;
      // }
    });
    }
 
    

  useEffect(() => {
    window.localStorage.setItem("save-contact", JSON.stringify(contactArr));
  }, [contactArr]);

  //  ф-ція вводу пошуку
  const handleChange = (inputTextSearch) => {
    setInputValue(inputTextSearch);
  };

  const handleAdd = (newvalue) => {
    // console.log("value", newvalue);  //  перевірка введеного об'єкту
    setContactAdd(() => {
      return [...contactArr, newvalue];
    });
  }; //  повернення оновленного масиву з компоненту ContactForm

  //  ф-ція видалення контакту
  const handleDelete = (deleteId) => {
    // console.log("contactArr", contactArr.length);  // перевірка поточного масиву
    if (2 > contactArr.length) {
      //  інформація якщо видалити всі дані
      alert("Для оновлення даних перезавантажте сторінку");
    }
    // console.log("evn", deleteId); // перевірка id що повертається з ContactList
    setContactAdd(() => {
      return contactArr.filter((contact) => contact.id !== deleteId); // використання методу
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onHandleAdd={handleAdd} />
      <Searchbox value={inputValue} onhandleChange={handleChange} />
      {/* передача inputValue та delete в ContactList */}
      <ContactList
        value={inputValue.toLowerCase()}
        contactArr={contactArr}
        onHandleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
