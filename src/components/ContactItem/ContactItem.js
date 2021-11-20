import React from "react";
import styles from "./contactItem.module.css";
import PropTypes from "prop-types";
import {notifyDel} from "toaster/toaster"
import { useDeleteContactMutation } from "redux/contacts/contactsSlice";

const ContactItem = ({id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const del = () => {
    deleteContact(id);
    notifyDel(`Contact with the name ${name} deleted!!!`)

  }
    return (
      <li className={styles.contactItem}>
        <span className={styles.name}>
          {name}:
        </span>
        <span className={styles.number}>{phone}</span>
        <button className={styles.btn} disabled = {isDeleting} onClick={() => del(id)} >
          {isDeleting ? 'Deleting...' : '❌'}          
        </button>
      </li>
    );
  

  //  const dispatch = useDispatch();

  // const getVisibleContact = (arrOfContacts, filter) => {
  //   return arrOfContacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const visibleContacts = getVisibleContact(
  //   useSelector(getContactsList),
  //   useSelector(getFilter)
  // );

  // return data.map(({ id, name, number }) => {
  //   return (
  // <li className={styles.contactItem} key={id}>
  //   <span id="name" className={styles.name}>
  //     {name}:
  //   </span>
  //   <span className={styles.number}>{number}</span>
  //   <button
  //     className={styles.btn}
  //     // onClick={() => dispatch(deleteContact(id))}
  //   >
  //     ❌
  //   </button>
  // </li>
  //   );
  // });
};

ContactItem.propType = {
  contacts: PropTypes.obj,
  clickOnBtn: PropTypes.func,
};
export default ContactItem;
