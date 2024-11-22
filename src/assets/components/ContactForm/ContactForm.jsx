import { Formik, Form, Field } from "formik";
const ContactForm = ({ handleSubmit, handleChangeInput }) => {
  return (
    <div>
      <Formik>
        <Form onSubmit={handleSubmit}>
          <label>
            <span>Name:</span>
            <Field name="name" value="" onChange={handleChangeInput} />
          </label>
          <label>
            <span>Phone:</span>
            <Field name="phone" value="" onChange={handleChangeInput} />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
