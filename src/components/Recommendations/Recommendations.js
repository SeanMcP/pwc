import React from 'react'
import ICONS from 'constants/icons'
import RecommendationsList from 'components/RecommendationsList/RecommendationsList'
import { useItems } from 'store/useItems'
import usePrayerRecord from 'store/usePrayerRecord'
import useSettings from 'store/useSettings'

import './Recommendations.scss'

function Recommendations() {
    const [prayerCount] = usePrayerRecord()
    const [{ recommendationCount: count }] = useSettings()
    const [, { getRecommendations }] = useItems()
    const { dates, favorites, lastPrayed } = getRecommendations(
        count - prayerCount || 0
    )

    const noRecommendations =
        !dates.length && !favorites.length && !lastPrayed.length

    return (
        <div className="Recommendations">
            <h2 className="Recommendations__heading">Recommendations</h2>
            {noRecommendations ? (
                <p className="Recommendations__none">
                    That's all we've got! Pray for world peace.
                </p>
            ) : (
                <>
                    <RecommendationsList
                        icon={ICONS.specialDate}
                        ids={dates}
                        title="Special dates"
                    />
                    <RecommendationsList
                        icon={ICONS.favorite}
                        ids={favorites}
                        title="Favorites"
                    />
                    <RecommendationsList
                        icon={ICONS.lastPrayed}
                        ids={lastPrayed}
                        title="Last prayed"
                    />
                </>
            )}
        </div>
    )
}

export default Recommendations
