import React from 'react'
import './App.css'
import { LocalStorageProvider } from './useLocalStorage'
import { IndividualsProvider } from 'store/useIndividuals'
import Router from './Router'

function App() {
    return (
        <div className="App">
            <IndividualsProvider>
                <LocalStorageProvider>
                    <Router />
                </LocalStorageProvider>
            </IndividualsProvider>
        </div>
    )
}

export default App
