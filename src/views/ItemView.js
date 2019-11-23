import React from 'react'
import dayjs from 'dayjs'

import FabContainer from 'components/FabContainer/FabContainer'
import ItemAttributes from 'components/ItemAttributes/ItemAttributes'
import IconButton from 'components/IconButton/IconButton'
import LinkButton from 'components/LinkButton/LinkButton'
import ViewContainer from 'components/ViewContainer/ViewContainer'

import ICONS from 'constants/icons'
import ROUTES, { buildRoute } from 'constants/routes'
import { useItems } from 'store/useItems'

const FORMATS = {
    date: 'MMM D',
}

function formatSpecialDate(date) {
    const day = dayjs(date).format(FORMATS.date)
    return day === 'Invalid Date' ? 'None' : day
}

function unitsAgo(unit = '', number) {
    return `${number} ${unit}${number === 1 ? '' : 's'} ago`
}

function formatLastPrayed(date) {
    if (!date) return 'Never'
    const today = dayjs()
    const lastPrayedDate = dayjs(date)
    const minutes = today.diff(lastPrayedDate, 'minutes')
    if (minutes === 0) {
        return 'Just now'
    }
    if (minutes < 60) {
        return unitsAgo('minute', minutes)
    }
    const hours = today.diff(lastPrayedDate, 'hours')
    if (hours <= 24) {
        return unitsAgo('hour', hours)
    }
    return lastPrayedDate.format(FORMATS.date)
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
                        icon={ICONS.favorite}
                        title="Favorited"
                    />
                )}
                <ItemAttributes.Item
                    body={formatLastPrayed(data.prayerRecord[0])}
                    icon={ICONS.lastPrayed}
                    title="Last prayed"
                />
                <ItemAttributes.Item
                    body={formatSpecialDate(data.date)}
                    icon={ICONS.specialDate}
                    title="Special date"
                />
                <ItemAttributes.Item
                    body={
                        <div
                            dangerouslySetInnerHTML={{
                                __html: data.notes
                                    ? `<p>${data.notes
                                          .trim()
                                          .replace(/\n/g, '</p><p>')}</p>`
                                    : 'None',
                            }}
                        />
                    }
                    icon={ICONS.notes}
                    title="Notes"
                />
            </ItemAttributes.List>
            <LinkButton to={buildRoute.edit(id)}>Edit item</LinkButton>
            {false && process.env.NODE_ENV === 'development' && (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            )}
            <FabContainer>
                <IconButton
                    icon={ICONS.prayer}
                    label="Record prayer"
                    onClick={() => recordPrayer(id)}
                    primary
                />
                <IconButton
                    aria-checked={Boolean(data.favorite)}
                    fill={Boolean(data.favorite)}
                    icon={ICONS.favorite}
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
