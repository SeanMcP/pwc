import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App/App'
import './styles/index.scss'
import { register } from './serviceWorker'
import { FirebaseProvider } from 'firebase/useFirebase'

ReactDOM.render(
    <FirebaseProvider>
        <App />
    </FirebaseProvider>,
    document.getElementById('root')
)

register()
