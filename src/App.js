import React from 'react'
import './App.css'
import { LocalStorageProvider } from './useLocalStorage'
import Router from './Router'

function App() {
    return (
        <div className="App">
            <LocalStorageProvider>
                <Router />
            </LocalStorageProvider>
        </div>
    )
}

export default App
