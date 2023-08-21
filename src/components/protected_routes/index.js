// will contain all of our protected routes
import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../../contexts/auth' // importing use auth function that runs out context

const ProtectedRoutes = () => {
    // going to destructure cookies from useAuth context

    const { cookies } = useAuth() // destructuring cookies value from useauth state... going to index auth and using the exported function tht useing created context to grab cookies value
    
  return (
    <div>
      
    </div>
  )
}

export default index
