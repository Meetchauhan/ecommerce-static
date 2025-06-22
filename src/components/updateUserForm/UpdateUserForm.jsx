import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { replace, useNavigate } from "react-router-dom";
import { addUser, updateUser } from "../../features/userSlice";

const UpdateUserForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    id: null,
    name: "",
    email: "",
    role: "",
  };

  const { values, error, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (value, action) => {
      const { id, ...updatedData } = value;
      dispatch(updateUser({ id, updatedData }));
      action.resetForm();
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-2xl p-10">
        <h2 className="text-3xl font-bold text-amber-400 text-center mb-8">
          Update User
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-200 mb-2" htmlFor="id">
              ID
            </label>
            <input
              type="number"
              name="id"
              onChange={handleChange}
              placeholder="Id"
              required
              value={values.id}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:border-amber-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-200 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              onChange={handleChange}
              value={values.name}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:border-amber-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-200 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
              value={values.email}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:border-amber-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-200 mb-2" htmlFor="role">
              Role
            </label>
            <input
              type="text"
              name="role"
              placeholder="Role"
              required
              onChange={handleChange}
              value={values.role}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:border-amber-400 transition"
            />
          </div>
          <div className="text-center">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UpdateUserForm;
