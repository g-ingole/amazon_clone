import React, { createContext, useState } from 'react'

export const LoginContext = createContext(null)

const ContextProvider = ({ children }) => {  // pass the (props) except children
    const [account, setAccount] = useState("");

    return (
        <>
            <LoginContext.Provider value={{ account, setAccount }}>
                {children}
                {/* {props.children} */}
            </LoginContext.Provider>
        </>
    )
}

export default ContextProvider
