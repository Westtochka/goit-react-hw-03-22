import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ data }) => {
  return (
    <div>
      <ul className={s.wrapper}>
        {data.map(({ id, name, number }) => (
          <Contact key={id} contact={{ id, name, number }} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
