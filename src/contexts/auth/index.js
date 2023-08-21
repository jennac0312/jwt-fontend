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
    }

    return (
        <AppContext.Provider>
            { children }
        </AppContext.Provider>
    )
}
