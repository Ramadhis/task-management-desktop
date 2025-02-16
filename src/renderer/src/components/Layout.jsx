import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  const elec = window.dir

  return (
    <div>
      <ul>
        <li>
          <Link to="/">to Dashboard</Link>
        </li>
        <li>
          <Link to="/user-management">to User Management</Link>
        </li>
      </ul>
      <Outlet />
      <div>{elec.data()}</div>
    </div>
  )
}

export default Dashboard
