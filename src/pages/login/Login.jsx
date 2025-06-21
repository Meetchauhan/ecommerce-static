import { useFormik } from "formik";
import { replace, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const auth = {
    email: "stackdot@gmail.com",
    password: "stackdot@123",
  };
  const { values, error, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (value, action) => {
      console.log("value", value);
      if (values.email === auth.email && values.password === auth.password) {
        action.resetForm();
        navigate("/dashboard", { replace: true });
      }
    },
  });
  return (
    <div className="h-dvh bg-gray-600 p-4 flex justify-center items-center">
      <div className="flex justify-center items-center bg-gray-400 w-[80%] p-10">
        <form onSubmit={handleSubmit} className="w-[50%]">
          <h2 className="text-2xl text-center mb-5">Login</h2>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              placeholder="Email"
              required
              className="border-2 border-black w-full h-12 p-1 rounded-md bg-white"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
              value={values.password}
              className="border-2 border-black w-full h-12 p-1 rounded-md bg-white"
            />
          </div>
          <div className="text-center">
            <button className="border-2 border-black p-2 cursor-pointer rounded-md bg-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
