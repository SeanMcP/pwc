import React from 'react'
import ViewContent from 'components/ViewContent/ViewContent'
import './ViewFooter.scss'

function ViewFooter() {
    return (
        <footer className="ViewFooter">
            <ViewContent>
                <small>
                    Made by <a href="https://github.com/seanmcp">SeanMcP</a>
                </small>
            </ViewContent>
        </footer>
    )
}

export default ViewFooter
