import React from 'react'
import Firebase from './firebase'

const FirebaseContext = React.createContext()

export function FirebaseProvider({ children }) {
    return (
        <FirebaseContext.Provider value={new Firebase()}>
            {children}
        </FirebaseContext.Provider>
    )
}

export function useFirebase() {
    const context = React.useContext(FirebaseContext)
    if (!context) {
        throw Error('useFirebase was called outside of FirebaseProvider')
    }
    return context
}
