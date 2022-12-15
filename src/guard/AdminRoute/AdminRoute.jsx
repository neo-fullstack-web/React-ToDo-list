import React from 'react'
import { Navigate } from 'react-router-dom'
const user = {
    name: 'Pepito Gomez',
    role: 'ADMIN_ROLE'
}
export const AdminRoute = ({children}) => {
  return (
    user.role === 'ADMIN_ROLE' ? children : <Navigate to='/' replace />
  )
}
