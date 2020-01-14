import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}

export const app = firebase.initializeApp(config)

const appAuth = app.auth()
export const auth = {
    doCreateUserWithEmailAndPassword(email, password) {
        appAuth.createUserWithEmailAndPassword(email, password)
    },
    doSignInWithEmailAndPassword(email, password) {
        appAuth.signInWithEmailAndPassword(email, password)
    },
    doSignOut() {
        appAuth.signOut()
    },
    doPasswordReset(email) {
        appAuth.sendPasswordResetEmail(email)
    },
    doPasswordUpdate(password) {
        appAuth.currentUser.updatePassword(password)
    },
}
