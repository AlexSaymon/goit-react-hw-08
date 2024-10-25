import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
