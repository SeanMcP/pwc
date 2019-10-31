import React from 'react'
import dayjs from 'dayjs'

import AppLink from 'components/AppLink/AppLink'
import Grid from 'components/Grid/Grid'
import ItemAttributes from 'components/ItemAttributes/ItemAttributes'
import IconButton from 'components/IconButton/IconButton'
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
        <ViewContainer title={data.name} backTo={ROUTES.list}>
            <header style={{ marginBottom: '1rem', textAlign: 'center' }}>
                <Grid columns={3} gap="0.5rem" inline>
                    <IconButton
                        icon="ArrowUp"
                        label="Record prayer"
                        onClick={() => recordPrayer(id)}
                        primary
                    />
                    <AppLink to={buildRoute.edit(id)}>
                        <IconButton icon="Edit2" label="Edit" primary />
                    </AppLink>
                    <IconButton
                        aria-checked={Boolean(data.favorite)}
                        fill={Boolean(data.favorite)}
                        icon="Star"
                        label="Favorite"
                        onClick={() => toggleFavorite(id)}
                        primary
                        role="switch"
                    />
                </Grid>
            </header>
            <ItemAttributes.List>
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
            {false && process.env.NODE_ENV === 'development' && (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            )}
        </ViewContainer>
    )
}

export default ItemView
