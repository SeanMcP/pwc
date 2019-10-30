import React from 'react'
import dayjs from 'dayjs'
import ROUTES, { buildRoute } from 'constants/routes'
import { useItems } from 'store/useItems'
import ViewContainer from 'components/ViewContainer/ViewContainer'
import ButtonLink from 'components/ButtonLink/ButtonLink'
import Button from 'components/Button/Button'
import Icon from 'components/Icon/Icon'
import ItemAttributes from 'components/ItemAttributes/ItemAttributes'

function formatSpecialDate(date) {
    const day = dayjs(date).format('M/D')
    return day === 'Invalid Date' ? 'None' : day
}

function formatLastPrayed(date) {
    const today = dayjs()
    const lastPrayedDate = dayjs(date)
    if (!lastPrayedDate) return 'Never'
    const days = today.diff(lastPrayedDate, 'days')
    return `${
        days === 0
            ? '< 24 hours ago'
            : `${days} day${days === 1 ? '' : 's'} ago`
    }`
}

function ItemView(props) {
    const [, { get, recordPrayer, toggleFavorite }] = useItems()
    const data = get(props.id)

    return (
        <ViewContainer title={data.name} backTo={ROUTES.list}>
            <header>
                <section>
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
                    </ItemAttributes.List>
                    <Button
                        onClick={() => toggleFavorite(props.id)}
                        aria-label="Toggle favorite"
                        aria-pressed={Boolean(data.favorite)}
                    >
                        <Icon icon="Star" />
                        <span>{data.favorite ? 'Favorited' : 'Favorite'}</span>
                    </Button>
                </section>
            </header>
            <h2>Notes</h2>
            <p
                dangerouslySetInnerHTML={{
                    __html: data.notes.replace(/\n/g, '<br/>')
                }}
            />
            {false && process.env.NODE_ENV === 'development' && (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            )}
            <footer>
                <Button onClick={() => recordPrayer(props.id)}>
                    Record prayer
                </Button>
                <ButtonLink to={buildRoute.edit(props.id)}>Edit</ButtonLink>
            </footer>
        </ViewContainer>
    )
}

export default ItemView
