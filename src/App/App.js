import "./App.css";
import Form from "components/Form/Form";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { Container } from "components/Container/Container";
import { useFetchContactsQuery } from "redux/contacts/contactsSlice";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

const App = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [filter, setFilter] = useState("");

  const onFilterChange = (value) => {
    setFilter(value);
  };
  console.log(contacts);
  return (
    <Container title="Phonebook">
      <Container>
        <Form />
      </Container>
      
      {contacts &&
        <Container title="Contacts">
          <Filter onFilterChange={onFilterChange} />
          <ContactList filter={filter} />
        </Container>
      }
      {isFetching && <h1>Loading...</h1>}

      <Toaster />
    </Container>
  );
};

export default App;
