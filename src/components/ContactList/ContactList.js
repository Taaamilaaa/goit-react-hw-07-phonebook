import ContactItem from "../ContactItem/ContactItem";
import styles from "./contactList.module.css";
import PropTypes from "prop-types";
import { useFetchContactsQuery } from "redux/contacts/contactsSlice";
const ContactList = ({ filter }) => {
  
  const { data: contacts } = useFetchContactsQuery();

  const getVisibleContact = (contactsArr, filter) => {
    if (contacts.length > 0) {
        return contactsArr.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    ); 
      } 
  };
  const visibleContact = getVisibleContact(contacts, filter);

  return (
    <ul className={styles.list}>
      {visibleContact.length !== 0 ? (visibleContact.map(contact =>
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          phone={contact.phone} />
        )) : <p>No matches</p>}
     </ul>
  )
};

ContactList.prototype = {
  contacts: PropTypes.obj,
  clickOnBtn: PropTypes.func,
};

export default ContactList;
