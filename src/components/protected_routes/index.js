// will contain all of our protected routes
import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../../contexts/auth' // importing use auth function that runs out context

const ProtectedRoutes = () => {
    // going to destructure cookies from useAuth context

    const { cookies } = useAuth() // destructuring cookies value from useauth state... going to index auth and using the exported function tht useing created context to grab cookies value

    // if token saved in cookies, redirect to protected route. otherwise say not authorized

    return cookies.token ? <Outlet/> : <h1>You are not authorized to view this page! </h1>
}

export default ProtectedRoutes
