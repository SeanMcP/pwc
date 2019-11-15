import React from 'react'
import dayjs from 'dayjs'

import FabContainer from 'components/FabContainer/FabContainer'
import ItemAttributes from 'components/ItemAttributes/ItemAttributes'
import IconButton from 'components/IconButton/IconButton'
import LinkButton from 'components/LinkButton/LinkButton'
import ViewContainer from 'components/ViewContainer/ViewContainer'

import ROUTES, { buildRoute } from 'constants/routes'
import { useItems } from 'store/useItems'

function formatSpecialDate(date) {
    const day = dayjs(date).format('M/D')
    return day === 'Invalid Date' ? 'None' : day
}

function formatLastPrayed(date) {
    if (!date) return 'Never'
    const today = dayjs()
    const lastPrayedDate = dayjs(date)
    const days = today.diff(lastPrayedDate, 'days')
    return `${
        days === 0
            ? '< 24 hours ago'
            : `${days} day${days === 1 ? '' : 's'} ago`
    }`
}

function ItemView({ id }) {
    const [, { get, recordPrayer, toggleFavorite }] = useItems()
    const data = get(id)

    return (
        <ViewContainer backTo={ROUTES.list} title={data.name}>
            <ItemAttributes.List>
                {data.favorite && (
                    <ItemAttributes.Item
                        body="Daily reminders"
                        icon="Star"
                        title="Favorited"
                    />
                )}
                <ItemAttributes.Item
                    body={formatLastPrayed(data.prayerRecord[0])}
                    icon="Clock"
                    title="Last prayed"
                />
                <ItemAttributes.Item
                    body={formatSpecialDate(data.date)}
                    icon="Calendar"
                    title="Special date"
                />
                <ItemAttributes.Item
                    body={
                        <div
                            dangerouslySetInnerHTML={{
                                __html: `<p>${data.notes
                                    .trim()
                                    .replace(/\n/g, '</p><p>')}</p>`
                            }}
                        />
                    }
                    icon="FileText"
                    title="Notes"
                />
            </ItemAttributes.List>
            <LinkButton to={buildRoute.edit(id)}>Edit item</LinkButton>
            {false && process.env.NODE_ENV === 'development' && (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            )}
            <FabContainer>
                <IconButton
                    icon="ArrowUp"
                    label="Record prayer"
                    onClick={() => recordPrayer(id)}
                    primary
                />
                <IconButton
                    aria-checked={Boolean(data.favorite)}
                    fill={Boolean(data.favorite)}
                    icon="Star"
                    label="Favorite"
                    onClick={() => toggleFavorite(id)}
                    primary
                    role="switch"
                />
            </FabContainer>
        </ViewContainer>
    )
}

export default ItemView
