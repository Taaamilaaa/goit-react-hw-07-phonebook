import "./App.css";
import Form from "../Form/Form";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import { useSelector } from "react-redux";
import { getContactsList } from "../../redux/contacts/contacts-selectors";

const App = () => {
  const contactList = useSelector(getContactsList);

  return (
    <div className="phonebook">
      <h2 className="title">Phonebook</h2>
      <Form />
      <h2 className="title">Contacts</h2>
      <Filter />
      {contactList.length > 0 ? (
        <ContactList />
      ) : (
        <p className="notification">Please add your contacts.</p>
      )}
    </div>
  );
};

export default App;
