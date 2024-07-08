import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import "./App.css"; // Import Tailwind CSS

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState({ street: "", city: "", country: "" });

  useEffect(() => {
    fetchUsers();
  }, []);

  // useEffect(() => {
  //   fetchSingleUser();
  // }, [selectedUser]);

  // const fetchSingleUser = async () => {
  //   if (!selectUser) return;

  //   try {
  //     const res = await axios.get(
  //       `http://localhost:3001/api/users/${selectUser}`
  //     );
  //     setSelectedUser(res.data);
  //   } catch (error) {
  //     console.error("Error fetching user:", error);
  //   }
  // };

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const addUser = async () => {
    const newUser = {
      name,
      email,
      countryWishList: [],
    };
    const res = await axios.post("http://localhost:3001/api/users", newUser);
    setUsers([...users, res.data]);
    setName("");
    setEmail("");
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/api/users/${id}`);
    setUsers(users.filter((user) => user._id !== id));
    setSelectedUser(null);
  };

  const deleteCountry = async (userId, countryId) => {
    await axios.delete(
      `http://localhost:3001/api/users/${userId}/countries/${countryId}`
    );
    setSelectedUser({
      ...selectedUser,
      countryWishList: selectedUser.countryWishList.filter(
        (country) => country._id !== countryId
      ),
    });
  };

  const addCountryToUser = async () => {
    if (selectedUser) {
      const updatedUser = {
        ...selectedUser,
        countryWishList: [
          ...selectedUser.countryWishList,
          { ...country, _id: Date.now().toString() },
        ],
      };
      await axios.put(
        `http://localhost:3001/api/users/${selectedUser._id}`,
        updatedUser
      );
      setSelectedUser(updatedUser);
      setCountry({ street: "", city: "", country: "" });
      fetchUsers();
    }
  };

  const selectUser = (user) => {
    console.log(user);
    setSelectedUser(user);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Add User</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-2 p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 p-2 border border-gray-300 rounded w-full"
        />
        <button
          onClick={addUser}
          className="bg-green-500 text-white p-2 rounded"
        >
          Add User
        </button>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Users List</h2>
        <ul className="border border-gray-300 rounded p-2">
          {users.map((user) => (
            <li
              key={user._id}
              className="mb-2 p-2 border-b border-gray-300 cursor-pointer"
              onClick={() => selectUser(user)}
            >
              <div className="flex justify-between">
                <span>{user.name}</span>
                <button
                  onClick={() => deleteUser(user._id)}
                  className="text-red-500"
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedUser && (
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Add Country to {selectedUser.name}'s Wish List
          </h2>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Country"
              value={country.country}
              onChange={(e) =>
                setCountry({ ...country, country: e.target.value })
              }
              className="mb-1 p-2 border border-gray-300 rounded w-full"
            />
            <button
              onClick={addCountryToUser}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Add Country
            </button>
          </div>
          <h3 className="text-lg font-semibold mb-2">Countries to Visit:</h3>
          <ul className="border border-gray-300 rounded p-2">
            {selectedUser.countryWishList.map((country) => (
              <li
                key={country._id}
                className="mb-2 p-2 border-b border-gray-300 flex justify-between"
              >
                <span>{`${country.country}`}</span>
                <button
                  onClick={() => deleteCountry(selectedUser._id, country._id)}
                  className="text-red-500"
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
