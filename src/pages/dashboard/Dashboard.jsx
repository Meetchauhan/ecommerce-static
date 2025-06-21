import { useState } from "react";
import AddUserForm from "../../components/addUserForm/AddUserForm";
import UsersList from "../../components/usersList/UsersList";
import SearchUser from "../../components/searchUser/SearchUser";
import UpdateUserForm from "../../components/updateUserForm/UpdateUserForm";

const Dashboard = () => {
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [showUpdateUserForm, setShowUpdateUserForm] = useState(false);
  return (
    <div className="">
      <h2 className="text-center text-3xl p-5">Dashboard</h2>
      <SearchUser />
      <UsersList />
      <div className="text-end px-5">
        <button
          onClick={() => setShowAddUserForm(!showAddUserForm)}
          className="text-end px-5 py-2 border-2 border-amber-800 my-5"
        >
          AddUser
        </button>
      </div>
      <div className="text-end px-5">
        <button
          onClick={() => setShowUpdateUserForm(!showUpdateUserForm)}
          className="text-end px-5 py-2 border-2 border-amber-800 my-5"
        >
          Update User
        </button>
      </div>
      {showAddUserForm && (
        <div className="">
          <AddUserForm />
        </div>
      )}
      {showUpdateUserForm && (
        <div className="">
          <UpdateUserForm />
        </div>
      )}
    </div>
  );
};
export default Dashboard;
