import { Formik, Form, Field } from "formik";
const ContactForm = ({ handleSubmit, initialValues, handleAddContact }) => {
  return (
    <div>
      {/* <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        handleAddContact={handleAddContact}
      > */}
      {/* <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        handleAddContact={handleAddContact}
      > */}
      <Formik
        onSubmit={(values, options) => {
          handleAddContact(values);
          handleSubmit(values, options);
        }}
        initialValues={initialValues}
      >
        <Form>
          <label>
            <span>Name:</span>
            <Field name="name" type="text" />
          </label>
          <label>
            <span>Phone:</span>
            <Field name="phone" type="text" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
