import React from 'react'
import PrayForList from 'PrayForList'
import { useIndividuals } from 'store/useIndividuals'

function Recommendations({ count = 5 }) {
    const [, { getRecommendations }] = useIndividuals()
    const { birthdays, favorites, lastPrayed } = getRecommendations(count)
    return (
        <div className="Recommendations">
            <PrayForList ids={birthdays} type="birthdays" symbol="🎂" />
            <PrayForList ids={favorites} type="favorites" symbol="⭐️" />
            <PrayForList ids={lastPrayed} type="last-prayed" symbol="⏳" />
        </div>
    )
}

export default Recommendations
