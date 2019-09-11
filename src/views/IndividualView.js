import React from 'react'
import Emoji from 'a11y-react-emoji'
import { Text, Button, minorScale, Pane, IconButton } from 'evergreen-ui'
import day from 'dayjs'
import { buildRoute } from 'constants/routes'
import { useIndividuals } from 'store/useIndividuals'
import ViewContainer from 'ViewContainer'
import AppLink from 'AppLink'
import { H1, H2 } from 'Headings'

function IndividualView(props) {
    const [, { get, recordPrayer, toggleFavorite }] = useIndividuals()
    const data = get(props.id)
    function formatBirthday() {
        return day(data.birthday).format('M/D')
    }
    function formatLastPrayed() {
        return day(data.lastPrayed).format('M/D/YYYY')
    }
    return (
        <ViewContainer title={data.name}>
            <header>
                <AppLink iconBefore="edit" to={buildRoute.edit(props.id)}>
                    Edit
                </AppLink>
                <H1>{data.name}</H1>
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
            <H2>Notes</H2>
            <Text
                is="p"
                dangerouslySetInnerHTML={{
                    __html: data.notes.replace(/\n/g, '<br/>')
                }}
            />
            {process.env.NODE_ENV === 'development' && (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            )}
            <Button onClick={() => recordPrayer(props.id)}>
                Record prayer
            </Button>
        </ViewContainer>
    )
}

export default IndividualView
