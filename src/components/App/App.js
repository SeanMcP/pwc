import React from 'react'
import Container from 'react-div-100vh'
import { CookiesProvider } from 'react-cookie'
import { ItemsProvider } from 'store/useItems'
import Router from 'Router'
import './App.scss'

function App() {
    return (
        <Container className="App">
            <CookiesProvider>
                <ItemsProvider>
                    <Router />
                </ItemsProvider>
            </CookiesProvider>
        </Container>
    )
}

export default App
