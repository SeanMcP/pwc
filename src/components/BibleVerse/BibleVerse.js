import React from 'react'

import VERSES from 'static/verses.json'
import IconHeading from 'components/IconHeading/IconHeading'

import './BibleVerse.scss'

function BibleVerse() {
    const keys = Object.keys(VERSES)
    const index = Math.floor(Math.random() * keys.length)
    const verse = VERSES[keys[index]]

    return (
        <div className="BibleVerse">
            <IconHeading icon="BookOpen">Bible verse</IconHeading>
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
