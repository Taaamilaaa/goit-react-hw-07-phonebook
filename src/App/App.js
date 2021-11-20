import "./App.css";
import Form from "components/Form/Form";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { useFetchContactsQuery } from "redux/contacts/contactsSlice";
import { Toaster } from "react-hot-toast";
import { useState } from "react";


const App = () => {

  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [filter, setFilter] = useState('');

  const onFilterChange = (value) => {
    setFilter(value)
  }
 console.log(contacts);
  return (
    <div className="phonebook">
      <h2 className="title">Phonebook</h2>
      <Form />
      <h2 className="title">Contacts</h2>
      <Filter onFilterChange={onFilterChange} />
      {isFetching && <h1>Loading . . .</h1>}
      {contacts && <ContactList filter = {filter} />}
      <Toaster />      
    </div>
  );
};

export default App;
