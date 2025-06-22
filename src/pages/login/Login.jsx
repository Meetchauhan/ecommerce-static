import { useFormik } from "formik";
import { useState } from "react";
import { replace, useNavigate } from "react-router-dom";

const Login = () => {
  const [showError, setShowError] = useState(false);
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
      localStorage.setItem("email", value.email);
      if (values.email === auth.email && values.password === auth.password) {
        action.resetForm();
        navigate("/dashboard", { replace: true });
      } else {
        setShowError(true);
      }
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    },
  });
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl p-10">
        <h2 className="text-3xl font-bold text-amber-400 text-center mb-8">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {showError && (
            <div className="text-red-500 text-center font-semibold mb-2">
              Invalid Email or Password
            </div>
          )}
          <div>
            <label className="block text-gray-200 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:border-amber-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-200 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
              value={values.password}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:border-amber-400 transition"
            />
          </div>
          <div className="text-center">
            <button className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 rounded-lg transition">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
