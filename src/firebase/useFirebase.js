import React from 'react'
import * as firebase from './firebase'

const FirebaseContext = React.createContext()

export function FirebaseProvider({ children }) {
    return (
        <FirebaseContext.Provider value={firebase}>
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
