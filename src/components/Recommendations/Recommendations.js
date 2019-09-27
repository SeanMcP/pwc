import React from 'react'
import PrayForList from 'components/PrayForList/PrayForList'
import { useIndividuals } from 'store/useIndividuals'
import useSettings from 'store/useSettings'
import './Recommendations.scss'
import usePrayerRecord from 'store/usePrayerRecord'

function Recommendations() {
    const [prayerCount] = usePrayerRecord()
    const [{ recommendationCount: count }] = useSettings()
    const [, { getRecommendations }] = useIndividuals()
    const { birthdays, favorites, lastPrayed } = getRecommendations(
        count - prayerCount || 0
    )
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
