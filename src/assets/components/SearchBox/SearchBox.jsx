import { Formik, Form, Field } from "formik";

const SearchBox = ({ changeFilter }) => {
  return (
    <div>
      <Formik>
        <Form>
          <label>
            <span>Find contacts by name</span>
            <Field name="" type="" onChange={changeFilter} />
          </label>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBox;
