import React from 'react'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <div>
        <h2>this is dashboard</h2>
        <Outlet />
    </div>
  )
}
