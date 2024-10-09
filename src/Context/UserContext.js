import { createContext, useEffect, useState } from "react";

export let userContext = createContext();


export default function UserContextProvider({ children }) {

    let [userToken, setUserToken] = useState(
        localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null)

    return <userContext.Provider value={{ userToken, setUserToken }}>
        {children}
    </userContext.Provider>
    
}