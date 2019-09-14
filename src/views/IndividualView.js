import React from 'react'
import Emoji from 'a11y-react-emoji'
import dayjs from 'dayjs'
import ROUTES, { buildRoute } from 'constants/routes'
import { useIndividuals } from 'store/useIndividuals'
import ViewContainer from 'ViewContainer'
import ButtonLink from 'components/ButtonLink/ButtonLink'

function IndividualView(props) {
    const [, { get, recordPrayer, toggleFavorite }] = useIndividuals()
    const data = get(props.id)
    function formatBirthday() {
        return dayjs(data.birthday).format('M/D')
    }
    function formatLastPrayed() {
        return dayjs(data.lastPrayed).format('M/D/YYYY')
    }
    return (
        <ViewContainer title={data.name} backTo={ROUTES.all}>
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
                    <button
                        onClick={() => toggleFavorite(props.id)}
                        aria-label="Toggle favorite"
                        aria-pressed={Boolean(data.favorite)}
                    >
                        <Emoji symbol="⭐️" />
                        <span>{data.favorite ? 'Favorited' : 'Favorite'}</span>
                    </button>
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
                <button onClick={() => recordPrayer(props.id)}>
                    Record prayer
                </button>
                <ButtonLink to={buildRoute.edit(props.id)}>Edit</ButtonLink>
            </footer>
        </ViewContainer>
    )
}

export default IndividualView
