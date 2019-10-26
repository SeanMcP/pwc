import React from 'react'
import { CookiesProvider } from 'react-cookie'
import { IndividualsProvider } from 'store/useIndividuals'
import Router from 'Router'
import './App.scss'
import { ItemsProvider } from 'store/useItems'

function App() {
    return (
        <div className="App">
            <CookiesProvider>
                <IndividualsProvider>
                    <ItemsProvider>
                        <Router />
                    </ItemsProvider>
                </IndividualsProvider>
            </CookiesProvider>
        </div>
    )
}

export default App
