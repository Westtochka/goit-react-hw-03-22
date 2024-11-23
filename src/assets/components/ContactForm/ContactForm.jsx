import { Formik, Form, Field } from "formik";
const ContactForm = ({ handleSubmit, initialValues }) => {
  return (
    <div>
      <Formik>
        <Form onSubmit={handleSubmit} initialValues={initialValues}>
          <label>
            <span>Name:</span>
            <Field name="name" value={initialValues.name} />
          </label>
          <label>
            <span>Phone:</span>
            <Field name="phone" value={initialValues.phone} />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
