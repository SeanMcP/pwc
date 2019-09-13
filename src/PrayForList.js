import React from 'react'
import {
    OrderedList,
    ListItem,
    Pane,
    Icon,
    majorScale,
    IconButton
} from 'evergreen-ui'
import { buildRoute } from 'constants/routes'
import { useIndividuals } from 'store/useIndividuals'
import AppCard from 'AppCard'
import AppLink from 'AppLink'

function PrayForList({ icon, ids, title }) {
    const [state, { recordPrayer }] = useIndividuals()

    if (ids.length === 0) return null

    const type = title.toLowerCase().replace(/ /g, '-')

    const list = ids.map(id => {
        const individual = state[id]
        return (
            <ListItem key={`${type}-${id}`}>
                <AppLink to={buildRoute.individual(id)}>
                    {individual.name}
                </AppLink>
                <IconButton
                    onClick={() => recordPrayer(id)}
                    aria-label="Record prayer"
                    icon="tick"
                />
                {/* Include dismiss icon */}
            </ListItem>
        )
    })

    return (
        <AppCard marginBottom={majorScale(2)}>
            <Pane display="flex" alignItems="center">
                <Icon icon={icon} marginRight={majorScale(1)} />
                <h2>{title}</h2>
            </Pane>
            <OrderedList>{list}</OrderedList>
        </AppCard>
    )
}

export default PrayForList
