import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ data, handleDeleteContact }) => {
  return (
    <div>
      <ul className={s.wrapper}>
        {data.map(({ id, name, number }) => (
          <Contact
            key={id}
            handleDeleteContact={handleDeleteContact}
            contact={{ id, name, number }}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
