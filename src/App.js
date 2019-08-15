import React from 'react'
import './App.css'
import { IndividualsProvider } from 'store/useIndividuals'
import Router from './Router'

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
