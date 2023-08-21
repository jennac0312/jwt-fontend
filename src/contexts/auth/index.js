import { createContext, useContext, useMemo } from "react";
// use memo similar to use satte. saves value and saves a funcitona dn basically if the val doesnt change and the page rerenders it doesn re run the snippet that takes longer. its supposed to speed up the process - dylan
import { useCookies } from 'react-cookie' // cookies to save to our browser
import axios from "axios";


const AppContext = createContext()


export const UserProvider = ( { children } ) => {

    const [ cookies, setCookies, removeCookie ] = useCookies()
    // const [ save all cookies using for AppContext, set certain variable as cookies... , logging out is removing cookies. singluar bc usually we remove one cookie at a time ]
    // manage our cookies [ variable that saves cookies... under cookie setting, like out setstate (jwt webt token? to log us in), remove cookies.. from website/app so someone else can log in ( remove jwt ) ]

    // all functions to access our backend.. so async
    const login = async ( formData ) => {
        // need parameter form data which is prob username and password

        let response = await axios( { 
            // all from auth.js router.post for login and authentication

            method: 'POST', // bc we are logging in and sending info
            url: 'http://localhost:5000/api/auth', // from backend route
            data: formData // what data we are sending

         } ) // object that has all info that we want to provide for the axious api request... in this cause our api is our backend

        //  would you like to accept cookies from this website?
        setCookies( 'token', res.data.token ) // saving token response in "token" ... this is your token for logging in
    }

    return (
        <AppContext.Provider>
            { children }
        </AppContext.Provider>
    )
}
