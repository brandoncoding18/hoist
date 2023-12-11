import React, { useState, useEffect } from "react";
import { BsTrash3Fill, BsPencil, BsPlusCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
import * as client from "./client";
function UserTable() {
  const [users, setUsers] = useState([]);
  const blank = { username: "", password: "", role: "USER" }
  const [user, setUser] = useState(blank);
  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
      setUser(blank);
    } catch (err) {
      console.log(err);
    }
  };

 
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };
  const selectUser = async (user) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
      setUser(blank)
    } catch (err) {
      console.log(err);
    }
  };



  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => { fetchUsers(); }, []);
  return (
    <div>
      <h1>User List</h1>
        Current user: {user.username}
      <table className="table">
        <thead>
        <tr>
            <td>
            Username
              <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}/>
            Password

              <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
            </td>
            <td>
            Firstname
              <input value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
            </td>
            <td>
            Lastname
              <input value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
            </td>
            <td>
            ROLE
              <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td>
            <td className="text-nowrap">
    <button onClick={updateUser}
      className="me-2 text-success fs-1 text">Update</button>
    <button onClick={createUser}
      className="text-success fs-1 text">Create</button>
    
  </td>
  
  

            </td>
          </tr>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <button onClick={() => selectUser(user)}
      className="text-success fs-1 text">Select</button>
      <button onClick={() => deleteUser(user)}
      className="text-danger fs-1 text">Delete</button>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
export default UserTable;