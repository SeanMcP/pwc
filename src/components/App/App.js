import React from 'react'
import { CookiesProvider } from 'react-cookie'
import { ItemsProvider } from 'store/useItems'
import Router from 'Router'

function App() {
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
