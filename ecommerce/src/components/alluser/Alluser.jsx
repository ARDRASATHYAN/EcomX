import React, { useEffect, useState } from 'react'
import './userstyle.css'
import { getAlluser } from '../../Apiservices/Api';

function Alluser() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fechdata = async () => {
          const data = await getAlluser();
          setUsers(data)
          console.log('allproducts', users);
        }
        fechdata()
      }, [])
  return (
    <>
      <div className="users-page">
  <h1>All Users</h1>
  <table className="user-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        {/* <th>Password</th> */}
        <th>Avatar</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          {/* <td>{user.password}</td> */}
          <td>
            <img className="avatar" src={user.avatar} alt="User Avatar" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </>
  )
}

export default Alluser
