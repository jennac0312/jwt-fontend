import { createContext, useContext, useMemo } from "react";
// use memo similar to use state. saves value and saves a funciton and basically if the val doesnt change and the page rerenders it doesnt re run the snippet that takes longer. its supposed to speed up the process - dylan
import { useCookies } from 'react-cookie' // cookies to save to our browser
import axios from "axios";


const AppContext = createContext()


export const UserProvider = ( { children } ) => {

    const [ cookies, setCookies, removeCookie ] = useCookies()
    // const [ save all cookies using for AppContext, set certain variable as cookies... , logging out is removing cookies. singluar bc usually we remove one cookie at a time ]
    // manage our cookies [ variable that saves cookies... under cookie setting, like our setState (jwt web token? to log us in), remove cookies.. from website/app so someone else can log in ( remove jwt ) ]

    // all functions to access our backend.. so async
    const login = async ( formData ) => {
        // need parameter form data ( username and password )

        let response = await axios({ 
            // all from auth.js router.post for login and authentication

            method: 'POST', // bc we are logging in and sending info
            url: 'http://localhost:5000/api/auth', // from backend route
            data: formData // what data we are sending

            // post req to this route that sends this data

        }) // object that has all info that we want to provide for the axious api request... in this case our api is our backend

        //  would you like to accept cookies from this website?
        // set cookies as the 'token' key:value
        setCookies( 'token', response.data.token ) // saving token response in "token" ... this is your token for logging in
        // key value { token: response.data.token }
    }

    // bring in formData from our form on the front end
    const signUp = async ( formData ) => {
        // sign up is on /api/users route.. signup is a POST route. validates info brought in, try to access DB if no new user we create one, and responds with webtoken (this all comes from backend)

        let response = await axios({
            method: 'POST',
            url: 'localhost://5000/api/users',
            data: formData

            // post req to this route that sends this data

        })

        setCookies( 'token', response.data.token ) // your token
        // when we sign up we are automatically logged in. why? bc thats what our route does... it signs in when we register to avoid needing to log in after
    }

    // we are creating a json web token each time


    const logOut = () => {
        [ 'token' ].forEach(( obj ) => {
            removeCookie( obj )
        })
        // anytime we set cookies we are doing a key value pair... aka objects
        // we hit logout button it'll go thru each cookie we have saved and remove them one by one
    }

    const value = useMemo(
        () => ({
            // use memo takes and anon function
            cookies, login, logOut, signUp
        }),
        [ cookies ] // dependency
    )
    // every time cookies changes its going to look at the values passed. if the cookies havent changed we wont invoke these passed, if cookies did change then we will re-run these funcitons
    // if cookies never changes we odnt have ot rerun time intensive functions... if something is already cached for cookies, none of these functions need to be rerun
    // useMemo keeps our app fast

    return (
        <AppContext.Provider>
            { children }
        </AppContext.Provider>
    )
}
