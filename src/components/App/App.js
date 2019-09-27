import React from 'react'
import { CookiesProvider } from 'react-cookie'
import { IndividualsProvider } from 'store/useIndividuals'
import Router from 'Router'
import './App.scss'

function App() {
    return (
        <div className="App">
            <CookiesProvider>
                <IndividualsProvider>
                    <Router />
                </IndividualsProvider>
            </CookiesProvider>
        </div>
    )
}

export default App
