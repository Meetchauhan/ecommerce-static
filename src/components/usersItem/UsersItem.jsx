import { useDispatch } from "react-redux";
import { deleteUser } from "../../features/userSlice";

const UsersItem = ({ id, name, email, role, handleDelete, updateUser }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow p-4 mb-4 flex items-center justify-between transition hover:scale-[1.01] hover:shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-8 flex-1">
        <div className="text-lg font-semibold text-amber-300 break-words">
          {name}
        </div>
        <div className="text-gray-200 break-words">{email}</div>
        <div className="text-green-400 font-medium break-words">{role}</div>
      </div>
      <button
        className="ml-6 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default UsersItem;
