// adding auth context

import { UserProvider } from './auth/index' // only 1 file inside auth so index doesnt need to be written

const AppProvider = ( { children } ) => {

    return(
        <UserProvider>
            { children } 
            {/* our children are wrapped in UserProvider */}
            {/* any more context providers will be wrapped ? */}
            {/* everything inside userprovider is going to access to the whole context */}
        </UserProvider>
    )
}

export default AppProvider