import { useDispatch, useSelector } from "react-redux";
import UsersItem from "../usersItem/UsersItem";
import { deleteUser } from "../../features/userSlice";

const UsersList = () => {
  const storedUsers = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.user.userEmail);
  console.log("userEmail", userEmail);

  const handleDelete = (id) => {
    console.log("deleteId", id);
    dispatch(deleteUser(id));
  };

  return (
    <div className="">
      {storedUsers?.data.map((item) =>
        userEmail?.length > 0 ? (
          userEmail === item.email && (
            <UsersItem
              key={item.id}
              id={item.id}
              name={item.name}
              email={item.email}
              role={item.role}
              handleDelete={() => handleDelete(item)}
            />
          )
        ) : (
          <UsersItem
            key={item.id}
            id={item.id}
            name={item.name}
            email={item.email}
            role={item.role}
            handleDelete={() => handleDelete(item)}
          />
        )
      )}
    </div>
  );
};

export default UsersList;
