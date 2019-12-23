import React from 'react'
import { CookiesProvider } from 'react-cookie'
import Router from 'Router'
import { ItemsProvider } from 'store/useItems'
import useSettings from 'store/useSettings'

function App() {
    useSettings()
    return (
        <>
            <CookiesProvider>
                <ItemsProvider>
                    <Router />
                </ItemsProvider>
            </CookiesProvider>
        </>
    )
}

export default App
