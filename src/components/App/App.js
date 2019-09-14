import React from 'react'
import { IndividualsProvider } from 'store/useIndividuals'
import Router from 'Router'
import './App.scss'

function App() {
    return (
        <div className="App">
            <IndividualsProvider>
                <Router />
            </IndividualsProvider>
        </div>
    )
}

export default App
