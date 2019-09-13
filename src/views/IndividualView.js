import React from 'react'
import Emoji from 'a11y-react-emoji'
import { Text, Button, minorScale, Pane, IconButton } from 'evergreen-ui'
import dayjs from 'dayjs'
import ROUTES, { buildRoute } from 'constants/routes'
import { useIndividuals } from 'store/useIndividuals'
import ViewContainer from 'ViewContainer'
import ButtonLink from 'ButtonLink'

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
                    <Pane>
                        <Emoji symbol="🙏" />
                        <Text is="span" marginLeft={minorScale(1)}>
                            {formatLastPrayed()}
                        </Text>
                    </Pane>
                    <Pane>
                        <Emoji symbol="🎂" />
                        <Text is="span" marginLeft={minorScale(1)}>
                            {formatBirthday()}
                        </Text>
                    </Pane>
                    <IconButton
                        onClick={() => toggleFavorite(props.id)}
                        aria-label="Toggle favorite"
                        aria-pressed={Boolean(data.favorite)}
                        icon={data.favorite ? 'star' : 'star-empty'}
                    />
                </section>
            </header>
            <h2>Notes</h2>
            <Text
                is="p"
                dangerouslySetInnerHTML={{
                    __html: data.notes.replace(/\n/g, '<br/>')
                }}
            />
            {process.env.NODE_ENV === 'development' && (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            )}
            <Pane is="footer">
                <Button onClick={() => recordPrayer(props.id)}>
                    Record prayer
                </Button>
                <ButtonLink to={buildRoute.edit(props.id)} iconBefore="edit">
                    Edit
                </ButtonLink>
            </Pane>
        </ViewContainer>
    )
}

export default IndividualView
