import React from 'react'
import Emoji from 'a11y-react-emoji'
import { Text, Heading, Button, minorScale, Pane } from 'evergreen-ui'
import day from 'dayjs'
import { buildRoute } from 'constants/routes'
import { useIndividuals } from 'store/useIndividuals'
import ViewContainer from 'ViewContainer'
import AppLink from 'AppLink'

function IndividualView(props) {
    const [, { get, recordPrayer }] = useIndividuals()
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
                <Heading is="h1" size={900}>
                    {data.name}
                </Heading>
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
                </section>
            </header>
            <Heading is="h2" size={700}>
                Notes
            </Heading>
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
