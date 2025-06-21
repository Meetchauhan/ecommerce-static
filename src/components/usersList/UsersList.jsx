import { useDispatch, useSelector } from "react-redux";
import UsersItem from "../usersItem/UsersItem";
import { deleteUser } from "../../features/userSlice";

const UsersList = () => {
  const dispatch = useDispatch();
  const { data, userEmail } = useSelector((state) => state.user);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const filteredUsers = data.filter((user) =>
    user.email.toLowerCase().includes(userEmail.toLowerCase())
  );

  return (
    <div>
      {(userEmail.length > 0 ? filteredUsers : data).map((item) => (
        <UsersItem
          key={item.id}
          id={item.id}
          name={item.name}
          email={item.email}
          role={item.role}
          handleDelete={() => handleDelete(item)}
        />
      ))}
    </div>
  );
};

export default UsersList;
