import React from 'react'
import { CookiesProvider } from 'react-cookie'
import Router from 'Router'
import './App.scss'
import { ItemsProvider } from 'store/useItems'
import useSettings from 'store/useSettings'

function App() {
    useSettings()
    return (
        <div className="App">
            <CookiesProvider>
                <ItemsProvider>
                    <Router />
                </ItemsProvider>
            </CookiesProvider>
        </div>
    )
}

export default App
