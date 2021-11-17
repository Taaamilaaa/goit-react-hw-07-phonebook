import ContactItem from "../ContactItem/ContactItem";
import styles from "./contactList.module.css";
import PropTypes from "prop-types";
const ContactList = () => {
  return (
    <ul className={styles.list}>
      <ContactItem />
    </ul>
  );
};

ContactList.prototype = {
  contacts: PropTypes.obj,
  clickOnBtn: PropTypes.func,
};

export default ContactList;
