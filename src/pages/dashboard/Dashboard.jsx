import { useState } from "react";
import AddUserForm from "../../components/addUserForm/AddUserForm";
import UsersList from "../../components/usersList/UsersList";
import SearchUser from "../../components/searchUser/SearchUser";
import UpdateUserForm from "../../components/updateUserForm/UpdateUserForm";

const Dashboard = () => {
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [showUpdateUserForm, setShowUpdateUserForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 py-10">
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl shadow-2xl p-8">
        <h2 className="text-center text-4xl font-bold text-amber-400 mb-8">
          Dashboard
        </h2>
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-8 gap-4">
          <div className="w-full md:w-1/2">
            <SearchUser />
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setShowAddUserForm(!showAddUserForm)}
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-6 py-2 rounded-lg shadow transition"
            >
              {showAddUserForm ? "Close Add User" : "Add User"}
            </button>
            <button
              onClick={() => setShowUpdateUserForm(!showUpdateUserForm)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
            >
              {showUpdateUserForm ? "Close Update User" : "Update User"}
            </button>
          </div>
        </div>
        <div className="mb-8">
          <UsersList />
        </div>
        {showAddUserForm && (
          <div className="mb-8">
            <AddUserForm />
          </div>
        )}
        {showUpdateUserForm && (
          <div className="mb-8">
            <UpdateUserForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
