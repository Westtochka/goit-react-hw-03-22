import s from "./Contact.module.css";
const Contact = ({ contact, handleDeleteContact }) => {
  const { id, name, number } = contact;
  return (
    <div className={s.wrapper}>
      <li className={s.li} key={id}>
        <p>👦 {name}</p>
        <p>☎ {number}</p>
        <button
          onClick={() => {
            handleDeleteContact(contact.id);
          }}
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default Contact;
