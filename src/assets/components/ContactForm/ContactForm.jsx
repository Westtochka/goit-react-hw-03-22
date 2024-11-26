import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";

const ContactForm = ({ handleSubmit, initialValues, handleAddContact }) => {
  const orderSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Замало символів")
      .max(50)
      .required("Це поле обов'язкове"),
    number: Yup.string()
      .min(3, "Замало цифр")
      .max(50, "Багато цифр, введіть менше")
      .required("Це поле обов'язкове"),
  });
  return (
    <div>
      <Formik
        onSubmit={(values, options) => {
          handleAddContact(values);
          handleSubmit(values, options);
        }}
        initialValues={initialValues}
        validationSchema={orderSchema}
      >
        <Form className={s.wrapper}>
          <label className={s.label}>
            <span>Name: </span>
            <Field name="name" type="text" className={s.input} />

            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Phone: </span>
            <Field name="number" type="text" className={s.input} />

            <ErrorMessage name="number" component="span" className={s.error} />
          </label>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
