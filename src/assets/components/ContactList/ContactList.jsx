import Contact from "../Contact/Contact";

const ContactList = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map(({ id, name, number }) => (
          <Contact key={id} contact={{ id, name, number }} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
