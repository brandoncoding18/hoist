import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };

  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };

  const save = async () => {
    await client.updateUser(account);
  };

  useEffect(() => {
    fetchAccount();
  }, []);
  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
        Password
          <input value={account.password}
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })}/>
              <br></br>
        First Name
          <input value={account.firstName}
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}/>
              <br></br>
        Last Name      
          <input value={account.lastName}
            onChange={(e) => setAccount({ ...account,
              lastName: e.target.value })}/>
              <br></br>
        Date of Birth
          <input value={account.dob}
            onChange={(e) => setAccount({ ...account,
              dob: e.target.value })}/>
              <br></br>
        Email
          <input value={account.email}
            onChange={(e) => setAccount({ ...account,
              email: e.target.value })}/>
                <br></br>
          <select onChange={(e) => setAccount({ ...account,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          
        </div>
      )}
      <button onClick={save}>
     Save
  </button>

  <button onClick={signout}>
    Signout
  </button>
  <Link to="/project/admin/users" className="btn btn-warning w-100">
    Users
  </Link>
    </div>
  );
}
export default Account;