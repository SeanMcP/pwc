import React from 'react'
import PrayForList from 'PrayForList'
import { useIndividuals } from 'store/useIndividuals'

function Recommendations({ count = 3 }) {
    const [, { getRecommendations }] = useIndividuals()
    const { birthdays, favorites, lastPrayed } = getRecommendations(count)
    return (
        <div className="Recommendations">
            <PrayForList icon="crown" ids={birthdays} title="Birthdays" />
            <PrayForList icon="star" ids={favorites} title="Favorites" />
            <PrayForList icon="time" ids={lastPrayed} title="Last prayed" />
        </div>
    )
}

export default Recommendations
