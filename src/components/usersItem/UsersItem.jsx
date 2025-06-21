import { useDispatch } from "react-redux";
import { deleteUser } from "../../features/userSlice";

const UsersItem = ({ id, name, email, role, handleDelete, updateUser }) => {
  return (
    <div className="p-3 mb-1 border-b-amber-800 border-b-2">
      <div className="flex justify-between">
        <div className="">{name}</div>
        <div className="">{email}</div>
        <div className="">{role}</div>
        <div
          className="cursor-pointer hover:text-red-600"
          onClick={handleDelete}
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default UsersItem;
