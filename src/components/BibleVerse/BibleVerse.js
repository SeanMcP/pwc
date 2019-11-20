import React from 'react'

import IconHeading from 'components/IconHeading/IconHeading'
import ICONS from 'constants/icons'
import VERSES from 'static/verses.json'

import './BibleVerse.scss'

function BibleVerse() {
    const keys = Object.keys(VERSES)
    const index = Math.floor(Math.random() * keys.length)
    const verse = VERSES[keys[index]]

    return (
        <div className="BibleVerse">
            <IconHeading icon={ICONS.verse}>Bible verse</IconHeading>
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
