import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import { useState } from "react";
import SearchBox from "./SearchBox/SearchBox";

const App = () => {
  const FINISH_CONTACTS = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  const updatedContacts = FINISH_CONTACTS.map((contact) => ({ ...contact }));
  const [dataContact, setDataContact] = useState(FINISH_CONTACTS);
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
    console.log(updatedContacts);
    // const { name, value } = values;
    // setDataContact({
    //   ...dataContact,
    //   updatedContacts,
    //   ...values,
    //   [name]: value,
    // });
  };

  const initialValues = {
    name: "",
    phone: "380",
  };
  const handleAddContact = () => {
    console.log("hello");
  };
  //   const handleChangeInput = (e) => {
  //     const { name, value } = e.target;
  //     // setDataContact({ ...dataContact, [name]: value });
  //     console.log(value);
  //     console.log(e);
  //     console.log(dataContact);
  //   };
  //   const newUser=(data)=>{
  //     id='',
  //     name='',
  //     number='',
  //   }
  //   const changeFilter = (e) => {
  //     setDataContact({ filter: e.currentTarget.value });
  //   };
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
