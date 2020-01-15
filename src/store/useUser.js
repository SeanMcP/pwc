import React from 'react'

const UserContext = React.createContext()

const initialState = null

function useUserHook() {
    const [user, setUser] = React.useState(initialState)

    function clearUser() {
        setUser(initialState)
    }

    return [user, setUser, clearUser]
}

export function UserProvider({ children }) {
    return (
        <UserContext.Provider value={useUserHook()}>
            {children}
        </UserContext.Provider>
    )
}

export default function useUser() {
    const context = React.useContext(UserContext)
    if (!context) throw Error('Called `useUser` outside of the `UserProvider`')
    return context
}
