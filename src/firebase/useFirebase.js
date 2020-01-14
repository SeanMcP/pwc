import React from 'react'
import Firebase from './firebase'

const FirebaseContext = React.createContext()

export function FirebaseProvider({ children }) {
    return (
        // TODO(dunno): This is, as far as I can tell, the only place where I am
        // initializing the firebase app. I don't have a lot of experience with
        // classes, but this seems pretty straightforward.
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
