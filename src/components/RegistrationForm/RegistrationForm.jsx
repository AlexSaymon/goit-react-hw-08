import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik initialValues={{ name: "", email: "", password: "" }} onSubmit={handleSubmit}>
      <Form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Field
          type="text"
          name="name"
          placeholder="Name"
          style={{ padding: "8px", fontSize: "16px" }}
        />
        <Field
          type="email"
          name="email"
          placeholder="Email"
          style={{ padding: "8px", fontSize: "16px" }}
        />
        <Field
          type="password"
          name="password"
          placeholder="Password"
          style={{ padding: "8px", fontSize: "16px" }}
        />
        <button type="submit" style={{ padding: "8px", fontSize: "16px" }}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
