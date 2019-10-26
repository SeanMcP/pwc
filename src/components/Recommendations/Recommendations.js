import React from 'react'
import PrayForList from 'components/PrayForList/PrayForList'
import { useItems } from 'store/useItems'
import usePrayerRecord from 'store/usePrayerRecord'
import useSettings from 'store/useSettings'
import './Recommendations.scss'

function Recommendations() {
    const [prayerCount] = usePrayerRecord()
    const [{ recommendationCount: count }] = useSettings()
    const [, { getRecommendations }] = useItems()
    const { birthdays, favorites, lastPrayed } = getRecommendations(
        count - prayerCount || 0
    )

    if (!birthdays.length && !favorites.length && !lastPrayed.length)
        return null

    return (
        <div className="Recommendations">
            <h2 className="Recommendations__heading">Recommendations</h2>
            <PrayForList symbol="🎂" ids={birthdays} title="Birthdays" />
            <PrayForList symbol="⭐️" ids={favorites} title="Favorites" />
            <PrayForList symbol="⏰" ids={lastPrayed} title="Last prayed" />
        </div>
    )
}

export default Recommendations
