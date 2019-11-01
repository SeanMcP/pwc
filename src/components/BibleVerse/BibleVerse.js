import React from 'react'

import VERSES from 'static/verses.json'
import Icon from 'components/Icon/Icon'

import './BibleVerse.scss'

function BibleVerse({ headingLevel = 'h2' }) {
    const keys = Object.keys(VERSES)
    const index = Math.floor(Math.random() * keys.length)
    const verse = VERSES[keys[index]]
    const HeadingTag = headingLevel

    return (
        <div className="BibleVerse">
            <header className="BibleVerse__header">
                <Icon icon="BookOpen" />
                <HeadingTag className="BibleVerse__heading">
                    Bible verse
                </HeadingTag>
            </header>
            <blockquote
                className="BibleVerse__blockquote"
                cite={verse.citation}
            >
                <p>{verse.modernized}</p>
                <cite className="BibleVerse__citation">{verse.citation}</cite>
            </blockquote>
        </div>
    )
}

export default BibleVerse
