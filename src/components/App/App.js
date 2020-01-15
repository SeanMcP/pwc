import React from 'react'
import { CookiesProvider } from 'react-cookie'
import { ItemsProvider } from 'store/useItems'
import { UserProvider } from 'store/useUser'
import Router from 'Router'

function App() {
    return (
        <>
            <UserProvider>
                <CookiesProvider>
                    <ItemsProvider>
                        <Router />
                    </ItemsProvider>
                </CookiesProvider>
            </UserProvider>
        </>
    )
}

export default App
