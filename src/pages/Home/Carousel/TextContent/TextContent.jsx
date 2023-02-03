import React from 'react'
import { useAuth } from '../../../../context/AuthContext'

export const TextContent = () => {
  const auth = useAuth()
  return (
    <div>TextContent
        {auth.user?.email}
        <button onClick={() => auth.login()}></button>
    </div>
  )
}
