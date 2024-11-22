const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  return (
    <div>
      <li key={id}>
        <p>👦 {name}</p>
        <p>☎ {number}</p>
        <button>Delete</button>
      </li>
    </div>
  );
};

export default Contact;
