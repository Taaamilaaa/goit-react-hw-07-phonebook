import { useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./form.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/actions";
import { getContactsList } from "../../redux/contacts/contacts-selectors";

const Form = () => {
  const contactList = useSelector(getContactsList);
  const dispatch = useDispatch();

  const nameInputId = uuid();
  const numberInputId = uuid();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: uuid(),
      name: name,
      number: number,
    };

    const renderedNames = contactList.find(
      ({name}) => name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (renderedNames) {
      alert(`${newContact.name} is already on contacts`);
      setName("");
      setNumber("");
      return;
    };
    dispatch(addContact(newContact));    
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor={nameInputId}>
        Name
      </label>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        id={nameInputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title=""
        required
        onChange={handleChangeName}
      />
      <label className={styles.label} htmlFor={numberInputId}>
        Number
      </label>
      <input
        className={styles.input}
        type="tel"
        name="number"
        value={number}
        id={numberInputId}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title=""
        required
        onChange={handleChangeNumber}
      />
      <button className={styles.submitBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Form;
