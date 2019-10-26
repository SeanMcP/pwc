import React from 'react'
import Emoji from 'a11y-react-emoji'
import dayjs from 'dayjs'
import ROUTES, { buildRoute } from 'constants/routes'
import { useItems } from 'store/useItems'
import ViewContainer from 'components/ViewContainer/ViewContainer'
import ButtonLink from 'components/ButtonLink/ButtonLink'
import Button from 'components/Button/Button'

function ItemView(props) {
    const [, { get, recordPrayer, toggleFavorite }] = useItems()
    const data = get(props.id)
    function formatBirthday() {
        return dayjs(data.birthday).format('M/D')
    }
    function formatLastPrayed() {
        return dayjs(data.lastPrayed).format('M/D/YYYY')
    }
    return (
        <ViewContainer title={data.name} backTo={ROUTES.list}>
            <header>
                <section>
                    <div>
                        <Emoji symbol="🙏" />
                        <span>{formatLastPrayed()}</span>
                    </div>
                    <div>
                        <Emoji symbol="🎂" />
                        <span>{formatBirthday()}</span>
                    </div>
                    <Button
                        onClick={() => toggleFavorite(props.id)}
                        aria-label="Toggle favorite"
                        aria-pressed={Boolean(data.favorite)}
                    >
                        <Emoji symbol="⭐️" />
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
            {process.env.NODE_ENV === 'development' && (
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
