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
    <div className="h-dvh bg-gray-600 p-4 flex justify-center items-center">
      <div className="flex justify-center items-center bg-gray-400 w-[80%] p-10">
        <form onSubmit={handleSubmit} className="w-[50%]">
          <h2 className="text-2xl text-center mb-5">Update</h2>
          <div className="mb-3">
            <input
              type="number"
              name="id"
              onChange={handleChange}
              placeholder="Id"
              required
              value={values.id}
              className="border-2 border-black w-full h-12 p-1 rounded-md bg-white"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              onChange={handleChange}
              value={values.name}
              className="border-2 border-black w-full h-12 p-1 rounded-md bg-white"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
              value={values.email}
              className="border-2 border-black w-full h-12 p-1 rounded-md bg-white"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="role"
              placeholder="Role"
              required
              onChange={handleChange}
              value={values.role}
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
export default UpdateUserForm;
