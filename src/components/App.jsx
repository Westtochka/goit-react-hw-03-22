import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import { useState, useEffect } from "react";
import SearchBox from "./SearchBox/SearchBox";
import { nanoid } from "nanoid";

const App = () => {
  const FINISH_CONTACTS = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  const initialValues = {
    name: "",
    number: "",
  };

  const [dataContact, setDataContact] = useState(() => {
    const savedContacts = localStorage.getItem("saveContacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return FINISH_CONTACTS;
  });
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };
  const [search, setSearch] = useState("");
  const filteredContacts = dataContact.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddContact = (newContact) => {
    console.log("hello", newContact);

    setDataContact((prev) => [...prev, { ...newContact, id: nanoid() }]);
    console.log(dataContact);
  };
  const handleDeleteContact = (id) => {
    setDataContact((prev) => prev.filter((contact) => contact.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("saveContacts", JSON.stringify(dataContact));
  }, [dataContact]);
  return (
    <div>
      <div
        style={{
          // height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // fontSize: 40,
          color: "#010101",
          // backgroundColor: "#eeeee9",
          // padding: "50px 50px",
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          handleSubmit={handleSubmit}
          handleAddContact={handleAddContact}
          initialValues={initialValues}
        />
      </div>
      <SearchBox search={search} setSearch={setSearch} />
      <ContactList
        data={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
