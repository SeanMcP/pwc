import React from 'react'
import PrayForList from 'PrayForList'
import { useIndividuals } from 'store/useIndividuals'
import useSettings from 'store/useSettings'

function Recommendations() {
    const [{ recommendationCount: count }] = useSettings()
    const [, { getRecommendations }] = useIndividuals()
    const { birthdays, favorites, lastPrayed } = getRecommendations(count)
    return (
        <div className="Recommendations">
            <PrayForList symbol="🎂" ids={birthdays} title="Birthdays" />
            <PrayForList symbol="⭐️" ids={favorites} title="Favorites" />
            <PrayForList symbol="⏰" ids={lastPrayed} title="Last prayed" />
        </div>
    )
}

export default Recommendations
