import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import { useState } from "react";
import SearchBox from "./SearchBox/SearchBox";
import { nanoid } from "nanoid";

const App = () => {
  const FINISH_CONTACTS = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  // const updatedContacts = FINISH_CONTACTS.map((contact) => ({ ...contact }));
  const [dataContact, setDataContact] = useState(FINISH_CONTACTS);
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };

  const initialValues = {
    name: "",
    phone: "380",
  };
  const handleAddContact = (newContact) => {
    console.log("hello", newContact);
    setDataContact((prev) => [...prev, { ...newContact, id: nanoid() }]);
    console.log(dataContact);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        handleSubmit={handleSubmit}
        handleAddContact={handleAddContact}
        initialValues={initialValues}
      />
      <SearchBox
      //   changeFilter={changeFilter}
      />
      <ContactList data={dataContact} />
    </div>
  );
};

export default App;
